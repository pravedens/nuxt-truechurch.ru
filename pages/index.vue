<script setup lang="ts">
import InputField from '~/components/InputField.vue';

function openAbout() {
    setPageLayout("auth");
    //navigateTo("/about");
}
</script>
<template>
    <div>
        Index
        <IconTwitter />
        <!--<NuxtLink to="/about">About</NuxtLink>-->
        <button @click="openAbout">Перейти</button>
        <InputField variant="black" placeholder="Введите ваш email"/>
    </div>
</template>
