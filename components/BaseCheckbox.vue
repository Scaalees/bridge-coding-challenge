<template>
  <div class="flex">
    <input
      :id="name"
      :name="name"
      type="checkbox"
      class="peer hidden"
      :checked="checked"
      @change="updateInput"
    />
    <label
      :for="name" 
      :class="[
        'w-full flex flex-row justify-around items-center gap-x-5 rounded-full font-regular select-none cursor-pointer py-5 px-4 shadow-md transition-colors duration-200 ease-in-out group',
        { 'bg-white text-purple hover:bg-purple hover:text-white': !checked },
        { 'bg-purple text-white': checked }
      ]"
    >
      <CircleCheck :class="[
        'w-8 h-8 transition-colors duration-200 ease-in-out flex-shrink-0',
        { 'fill-purple group-hover:fill-white': !checked },
        { 'fill-white': checked }
      ]" />
      <slot />
      <div class="text-xs text-center">
        <p class="text-purple-light">Estimate</p>
        <span>£{{ estimate }}</span>
      </div>
    </label>
  </div>
</template>
<script lang="ts" setup>
import CircleCheck from '~/assets/circle-check.svg?component'

const props = defineProps({
  name:{
    type: String,
    required: true
  },
  estimate: {
    type: String
  },
  checked: {
    type: Boolean
  },
  modelValue: {
    type: Object,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateInput = ($event: any) => {
  let updatedValue = props.modelValue;
  updatedValue.map((x: IOption) => {
    if (x.name === $event.target.name) {
      x.checked = $event.target.checked
    }
  })
  emit('update:modelValue', updatedValue)
}
</script>
