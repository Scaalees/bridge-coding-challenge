<template>
  <div class="grid mb-8 grid-cols-1 gap-x-4 gap-y-8 mx-4
    lg:mx-auto lg:max-w-[1014px] md:grid-cols-3">
    <BaseCheckbox
      :key="option"
      v-for="option in store.options"
      v-model="store.options"
      :name="option.name"
      :estimate="option.estimate"
      :checked="option.checked"
    >
      {{ option.label }}
    </BaseCheckbox>
  </div>
  <div class="grid grid-cols-2 gap-x-4 gap-y-8 mx-4
    lg:mx-auto lg:max-w-[1014px] md:grid-cols-3">
    <div class="w-full flex flex-row justify-around items-center gap-x-5 rounded-full bg-white text-purple font-regular py-[18px] px-[30px] shadow-md
      md:col-start-2">
      <span class="font-bold uppercase">Total</span>
      <span class="text-[28px] text-red">£{{ store.getTotalEstimate.toFixed(2) }}</span>
    </div>
    <BaseButton to="/questions">
      Continue
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const store = useOptionsStore();
</script>