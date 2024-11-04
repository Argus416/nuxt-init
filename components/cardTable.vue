<script lang="ts" setup>
import _ from 'lodash'
import Card from '../../components/card.vue'
import type { TMDP_MOVIE, TMDP_RESPONSE } from '~/types/tmdp'

const props = defineProps({
  data: {
    type: Object as PropType<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE>,
    required: true,
  },
})
const emit = defineEmits(['loadData'])

const page = ref(1)
const search = ref('')
const { data } = toRefs(props)
const pagesToDisplay = ref(_.range(1, 6))
const isSearchMode = ref(false)

watch(
  () => search.value,
  (searchResult: string) => {
    emit('loadData', 1, searchResult)
  },
)

const hanldPageChange = (npage: number) => {
  page.value = npage
  emit('loadData', npage, search.value)
}

const firstPage = () => {
  page.value = 1
  emit('loadData', 1, search.value)
}

const lastPage = () => {
  const isMorethan500 = props.data!.total_pages > 500
  page.value = isMorethan500 ? 4 : props.data!.total_pages
  emit('loadData', page.value, search.value)
}

const nextPage = () => {
  if (page.value < props.data!.total_pages) {
    page.value++
    emit('loadData', page.value, search.value)
  }
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    emit('loadData', page.value, search.value)
  }
}

watch(
  () => page.value,
  (npage) => {
    if (npage === 1 || npage === 2) {
      pagesToDisplay.value = _.range(1, Math.min(6, props.data.total_pages + 1))
    } else if (
      npage === props.data?.total_pages ||
      npage === props.data?.total_pages - 1
    ) {
      pagesToDisplay.value = _.range(
        Math.max(1, props.data.total_pages - 4),
        props.data.total_pages + 1,
      )
    } else {
      pagesToDisplay.value = _.range(
        Math.max(1, npage - 2),
        Math.min(npage + 3, props.data.total_pages + 1),
      )
    }
  },
)
</script>

<template>
  <FormKit v-model="search" type="search" />
  <section>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="film in props.data?.results"
        :key="film.id"
        class="border rounded overflow-hidden max-h-[700px]"
      >
        <Card :data="film" />
      </div>
    </div>

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
        v-if="page < props.data?.total_pages"
        class="border border-gray-200 rounded p-2 cursor-pointer"
        @click="nextPage"
      >
        {{ '>' }}
      </button>

      <button
        class="border border-gray-200 rounded p-2 cursor-pointer"
        @click="lastPage"
      >
        {{ '>>' }}
      </button>
    </div>
  </section>
</template>
