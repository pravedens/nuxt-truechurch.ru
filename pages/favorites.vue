<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites.store';
const favoriteStore = useFavoritesStore();
favoriteStore.addToFavorite(1);
</script>

<template>
    <div>
        {{ favoriteStore.favoriteIds[0] }}
    </div>
</template>