<script setup lang="ts">
function openAbout() {
    setPageLayout("auth");
    //navigateTo("/about");
}
</script>
<template>
    <div>
        Index
        <!--<NuxtLink to="/about">About</NuxtLink>-->
        <button @click="openAbout">Перейти</button>
    </div>
</template>
