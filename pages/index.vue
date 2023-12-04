<template>
  <div class="grid mx-auto mt-14 grid-cols-3 gap-x-4 gap-y-8 max-w-[1014px]">
    <Checkbox
      v-for="option in store.options"
      v-model="store.options"
      :name="option.name"
      :estimate="option.estimate"
      :checked="option.checked"
    >
      {{ option.label }}
    </Checkbox>
    <div class="col-start-2 w-full flex flex-row justify-around items-center gap-x-5 rounded-full bg-white text-purple font-regular select-none cursor-pointer py-5 px-4 shadow-md transition-colors duration-200 ease-in-out">
      <span class="font-bold">Total</span>
      <span class="text-[28px] text-red">£{{ store.getTotalEstimate.toFixed(2) }}</span>
    </div>
    <!-- <nuxt-link>Continue</nuxt-link> -->
  </div>
</template>

<script setup lang="ts">
const store = useOptionsStore();
</script>