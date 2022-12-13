export const useLanguageFilterStore = defineStore({
  id: 'languageFilterStore',
  state: () => {
    return {
      languageFilter: ['uk', 'ru'],
      currentLanguage: 'uk',
    };
  },
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang;
    },
  },
  getters: {
    getFiltersList: (state) => state.languageFilter,
    getCurrentLanguage: (state) => state.currentLanguage,
  },
});
