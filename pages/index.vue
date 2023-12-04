<template>
  <div class="grid mx-auto mt-14 grid-cols-3 gap-x-4 gap-y-8 max-w-[1014px]">
    <Checkbox
      v-for="option in options"
      v-model="options"
      :name="option.name"
      :estimate="option.estimate"
      :checked="option.checked"
    >
      {{ option.label }}
    </Checkbox>
    <div class="col-start-2 w-full flex flex-row justify-around items-center gap-x-5 rounded-full bg-white text-purple font-regular select-none cursor-pointer py-5 px-4 shadow-md transition-colors duration-200 ease-in-out">
      <span class="font-bold">Total</span>
      <span class="text-[28px] text-red">£{{ total.toFixed(2) }}</span>
    </div>
    <!-- <nuxt-link>Continue</nuxt-link> -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const options = reactive([
  { label: 'Identify requirements', estimate: '6.00', name: 'ir', checked: true },
  { label: 'Request a quotation', estimate: '3.00', name: 'raq', checked: true },
  { label: 'Find products', estimate: '16.00', name: 'fp', checked: true },
  { label: 'Raise an order', estimate: '6.00', name: 'rao', checked: true },
  { label: 'Authorise sale', estimate: '21.55', name: 'as', checked: true },
  { label: 'Pay provider', estimate: '13.00', name: 'pp', checked: true },
  { label: 'Deliver product', estimate: '4.30', name: 'dp', checked: true },
  { label: 'Invoice check', estimate: '6.00', name: 'ic', checked: true },
  { label: 'Place order', estimate: '6.50', name: 'po', checked: true },
])

const total = computed(() => {
  let total = 0
  options.map((x) => {
    if (x.checked) total += parseFloat(x.estimate)
  })
  return total
})
</script>