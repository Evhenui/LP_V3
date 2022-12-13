<template>
  <div>
    <h3>Catalog:</h3>
    <div v-if="catalogs">
      <ul>
        <li v-for="item in catalogs" :key="item.id">
          <NuxtLink :to="`/catalog/${item.slug}`">{{
            item.name[currentLanguage]
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p><Loader /></p>
    </div>
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from "~~/store/languageFilterStore";
import { storeToRefs } from "pinia";

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);

const { data: catalogs } = useFetch("/api/catalog");
</script>
