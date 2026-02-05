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
    <main class="main">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.main {
  margin: 0 auto;
  max-width: 1248px;
  padding: 40px 16px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
