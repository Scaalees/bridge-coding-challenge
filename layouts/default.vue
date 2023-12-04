<template>
  <div class="bg-white min-h-screen relative z-0">
    <div class="top-0 h-full w-full absolute blur-[9px] z-[-1] bg-white">
      <img 
        class="object-cover object-center w-full h-full opacity-40" 
        srcset="/images/bg@2x.jpg 2x, /images/bg.jpg 1x"
        src="/images/bg.jpg"
        alt="background office setting">
    </div>
    <h1 class="text-red text-2xl font-medium uppercase text-center pt-[114px]">Calculating Your Total Costs</h1>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
