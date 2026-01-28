<script setup lang="ts">
import "~/assets/styles/main.css";
/*throw createError({
  statusCode: 401,
  statusMessage: "Недоступна страница без авторизации",
  data: {
    userId: 1,
  }
})*/
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
