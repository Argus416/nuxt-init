<script lang="ts" setup>
import Card from '../../components/card.vue'

definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const { results: series } = await useTmdb().getSeries()
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Series" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <section class="grid grid-cols-3 gap-4">
        <div
          v-for="serie in series"
          :key="serie.id"
          class="border rounded overflow-hidden max-h-[700px]"
        >
          <Card :data="serie" />
        </div>
      </section>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
