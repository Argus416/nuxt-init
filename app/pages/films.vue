<script lang="ts" setup>
import _ from 'lodash'
import type { TMDP_MOVIE, TMDP_RESPONSE } from '~/types/tmdp'
import Card from '../../components/card.vue'

definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const page = ref(1)
const films = ref<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE>()
const pagesToDisplay = ref(_.range(1, 6))

const loadData = async (p: number) => {
  films.value = await useTmdb().getMovies(p)
  const isMorethan500 = films.value!.total_pages > 500
  films.value.total_pages = isMorethan500 ? 500 : films.value!.total_pages
}

const hanldPageChange = (npage: number) => {
  page.value = npage
  loadData(npage)
}

const firstPage = () => {
  page.value = 1
  loadData(1)
}

const lastPage = () => {
  const isMorethan500 = films.value!.total_pages > 500
  page.value = isMorethan500 ? 500 : films.value!.total_pages
  loadData(page.value)
}

const nextPage = () => {
  if (page.value < films.value!.total_pages) {
    page.value++
    loadData(page.value)
  }
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    loadData(page.value)
  }
}

watch(
  () => page.value,
  (npage) => {
    if (npage === films.value?.total_pages) {
      pagesToDisplay.value = _.range(npage - 4, npage + 1)
    }

    if (npage > 2 && npage < films.value!.total_pages - 2) {
      pagesToDisplay.value = _.range(npage - 2, npage + 3)
    }

    if (npage === 1) {
      pagesToDisplay.value = _.range(1, 6)
    }
  },
)

await loadData(page.value)
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Films" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <section class="grid grid-cols-3 gap-4">
        <div
          v-for="film in films?.results"
          :key="film.id"
          class="border rounded overflow-hidden max-h-[700px]"
        >
          <Card :data="film" />
        </div>
      </section>

      <div class="w-full flex items-center gap-4 justify-center mt-4">
        <button
          class="border border-gray-200 rounded p-2 cursor-pointer"
          @click="firstPage"
        >
          {{ '<<' }}
        </button>

        <button
          v-if="page > 1"
          class="border border-gray-200 rounded p-2 cursor-pointer"
          @click="prevPage"
        >
          {{ '<' }}
        </button>

        <span
          v-for="p in pagesToDisplay"
          :key="p"
          class="border border-gray-200 rounded p-2 cursor-pointer"
          :class="p === page ? 'bg-gray-200 text-black' : ''"
          @click="hanldPageChange(p)"
          >{{ p }}</span
        >

        <button
          v-if="page < films?.total_pages"
          @click="nextPage"
          class="border border-gray-200 rounded p-2 cursor-pointer"
        >
          {{ '>' }}
        </button>

        <button
          @click="lastPage"
          class="border border-gray-200 rounded p-2 cursor-pointer"
        >
          {{ '>>' }}
        </button>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
