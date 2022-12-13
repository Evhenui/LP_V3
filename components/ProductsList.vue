<template>
  <div>
    <h3>List of products:</h3>
    <div v-if="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p><Loader /></p>
    </div>
  </div>
</template>

<script setup>
import { productsFilter } from "~~/utils/queryParams";
import { useQueryStore } from "~~/store/queryStore";
import { storeToRefs } from "pinia";

const queryStore = useQueryStore();
const currentQuery = queryStore.getQuery;

const params = {
  ...currentQuery,
  baseQuery: "/api/products",
};

const query = productsFilter(params);

const { data: products } = await useFetch(query);
</script>
