<script lang="ts" setup>
import _ from 'lodash'
import type { TMDP_MOVIE, TMDP_RESPONSE } from '~/types/tmdp'
import CardTable from '../../components/cardTable.vue'

definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const page = ref(1)
const films = ref<{ results: TMDP_MOVIE[] } & TMDP_RESPONSE>()

const loadData = async (p: number, search: string) => {
  films.value = await useTmdb().getData({
    page: p,
    type: 'movie',
    query: search,
  })
  const isMorethan500 = films.value!.total_pages > 500
  films.value.total_pages = isMorethan500 ? 500 : films.value!.total_pages
}

await loadData(page.value)
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Films" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <CardTable :data="films" @loadData="loadData" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
