<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const imgUrl = 'https://image.tmdb.org/t/p/w500/'
</script>

<template>
  <img
    class="h-64 w-full object-contain"
    :src="imgUrl + $props.data.poster_path"
    :alt="$props.data.original_title"
  />
  <div class="p-2">
    <h2 class="font-bold mb-4">
      {{ $props.data?.original_title || $props.data?.name }}
    </h2>
    <p class="">{{ $props.data.overview }}</p>
  </div>
</template>
