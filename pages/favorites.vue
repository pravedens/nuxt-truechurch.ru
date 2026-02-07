<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites.store';
const favoriteStore = useFavoritesStore();
await callOnce('fetchFavorites', () => favoriteStore.fetchFavorites(), {
    mode: "navigation",
});
</script>

<template>
    <div>
        {{ favoriteStore.favoriteIds[0] }}
    </div>
</template>