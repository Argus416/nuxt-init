<script lang="ts" setup>
import _ from 'lodash'
import type { TMDP_MOVIE, TMDP_RESPONSE, TMDP_SERIES } from '~/types/tmdp'
import CardTable from '../../components/cardTable.vue'

definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const page = ref(1)
const series = ref<{ results: TMDP_SERIES[] } & TMDP_RESPONSE>()
const search = ref('')

const loadData = async (p: number, search: string) => {
  series.value = await useTmdb().getData({
    page: p,
    type: 'tv',
    query: search,
  })
  const isMorethan500 = series.value!.total_pages > 500
  series.value.total_pages = isMorethan500 ? 500 : series.value!.total_pages
}

await loadData(page.value)
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Series" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <CardTable :data="series" @loadData="loadData" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
