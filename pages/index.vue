<script setup lang="ts">
import InputField from '~/components/InputField.vue';

function openAbout() {

    navigateTo("/about");
}
</script>
<template>
    <div>
        Index
        <Icon name="icons:twitter" />
        <!--<NuxtLink to="/about">About</NuxtLink>-->
        <button @click="openAbout">Перейти</button>
        <InputField variant="black" placeholder="Введите ваш email"/>
    </div>
</template>
