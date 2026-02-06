<script lang="ts" setup>
const model = defineModel<string>();
const { options } = defineProps<{
  options: { label: string; value: string }[];
}>();
</script>

<template>
  <div class="select-wrapper">
    <select v-model="model" class="select">
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <svg
      fill="#000000"
      height="34px"
      width="34px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      enable-background="new 0 0 500 500"
      xml:space="preserve"
    >
      <path
        d="M250.1,217l-50.9-50.9c-3.1-3.1-8.2-3.1-11.3,0s-3.1,8.2,0,11.3l56.6,56.6c3.1,3.1,8.2,3.1,11.3,0l56.6-56.6
	c1.6-1.6,2.3-3.6,2.3-5.7s-0.8-4.1-2.3-5.7c-3.1-3.1-8.2-3.1-11.3,0L250.1,217z"
      />
    </svg>
  </div>
</template>

<style scoped>
.select-wrapper {
    position: relative;
}

.select-wrapper svg{
    position: absolute;
    right: 6px;
    top: 16px;
}

.select {
    appearance: none;
    background-color: transparent;
    border: 1px solid var(--color-dark-gray);
    padding: 15px 12px;
    margin: 0;
    width: 100%;
    font-family: inherit;
}
    </style>
