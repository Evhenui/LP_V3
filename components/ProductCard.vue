<template>
  <div>
    <h2>{{ product.name[currentLanguage] }}</h2>
    <span v-html="product.description[currentLanguage]"></span>
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from "~~/store/languageFilterStore";
import { storeToRefs } from "pinia";

const { product } = defineProps(["product"]);

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);
</script>
