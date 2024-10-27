<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })

const { signIn, getProviders } = useAuth()
const providers = await getProviders()
const { isLoggedIn } = useUser()
</script>

<template>
  <div v-if="!isLoggedIn">
    <button
      v-for="provider in providers"
      :key="provider.id"
      @click="signIn(provider.id)"
    >
      Sign in with {{ provider.name }}
    </button>
  </div>
  <!-- <AwesomeWelcome :with-alert="true" /> -->
</template>
