<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
import "~/assets/styles/main.css";
/*throw createError({
  statusCode: 401,
  statusMessage: "Недоступна страница без авторизации",
  data: {
    userId: 1,
  }
})*/
const name = ref<LayoutKey>("auth");
</script>

<template>
  <NuxtLayout :name="name">
    <NuxtPage />
  </NuxtLayout>
</template>
