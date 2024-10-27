<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt todo app' })

const { signIn, getProviders } = useAuth()
const providers = await getProviders()
const { isLoggedIn } = useUser()
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Home page" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <div>My Content</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Another Section" />
      <div>My Content</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
  <!-- <AwesomeWelcome :with-alert="true" /> -->
</template>
