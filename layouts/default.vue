<script setup lang="ts">
import LayoutFooter from '~/components/LayoutFooter.vue';

</script>

<template>
    <div>
        <div>Шапка</div>
        <slot />
        <layout-footer />
    </div>
</template>