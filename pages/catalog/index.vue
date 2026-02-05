<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { Product } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");

const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");

const selectDefault = { value: "", label: "Категории" };

const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories
        .map((c) => ({
          value: c.id.toString(),
          label: c.name,
        }))
        .concat(selectDefault)
    : [selectDefault];
});

const product: Product = {
  id: 7,
  name: "Infinity Ring Set",
  price: 150,
  short_description: "Набор колец 'Бесконечность'",
  long_description:
    "Стильный набор из трех колец разного размера с символом бесконечности. Выполнен из серебра 925 пробы с родиевым покрытием.",
  sku: "RING-INF-SET",
  discount: 25,
  images: ["/images/jewelry/infinity1.jpg", "/images/jewelry/infinity2.jpg"],
  category_id: 2,
  category: {
    id: 2,
    name: "Кольца",
    alias: "rings",
  },
  created_at: new Date,
  updated_at: new Date,
};
</script>

<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div>
        <CatalogCard v-bind="product"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  display: flex;
  gap: 36px;
}

.catalog__filter {
  width: 260px;
}
</style>
