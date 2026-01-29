<script setup lang="ts">
import LayoutFooter from '~/components/LayoutFooter.vue';
import LayoutHeader from '~/components/LayoutHeader.vue';

</script>

<template>
    <div>
        <layout-header />
        <slot />
        <layout-footer />
    </div>
</template>