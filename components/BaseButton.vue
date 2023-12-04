<template>
  <NuxtLink class="bg-red text-white px-3 py-2.5 rounded-full inline-flex justify-self-center self-center items-center gap-x-[5px]" :to="to">
    <slot />
    <Continue class="w-7 h-7" />
  </NuxtLink>
</template>

<script setup lang="ts">
import Continue from '~/assets/continue.svg?component'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>