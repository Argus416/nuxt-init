<script lang="ts" setup>
import Card from '../../components/card.vue'
import TmdbServicesInstance from '../../services/TMDBServices'

definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const data = await TmdbServicesInstance.getSeries()
const imgUrl = 'https://image.tmdb.org/t/p/w500/'
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
          v-for="serie in data"
          :key="serie.id"
          class="border rounded overflow-hidden max-h-[700px]"
        >
          <Card :data="serie" />
        </div>
      </section>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
