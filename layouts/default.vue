<template>
  <div>
    <Header></Header>
<!--     <header>
      <button
        v-for="(item, index) in languageList"
        :key="index"
        @click="() => toggleLanguage(item)"
      >
        {{ item }}
      </button>
      <NuxtLink to="/warranty">Гарантия</NuxtLink>
      <NuxtLink to="/">Главная</NuxtLink>
    </header>

    <div>
      <slot />
    </div> -->
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import Header from '~~/components/header/Header.vue';

const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;

const toggleLanguage = (item) => {
  lang.setLanguage(item);
};
</script>

<style scoped></style>
