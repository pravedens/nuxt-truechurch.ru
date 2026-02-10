<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});

const authStore = useAuthStore();
</script>
<template>
    <div>
        <NuxtLink href="/" @click="authStore.clearToken">Выход</NuxtLink>
    </div>
</template>