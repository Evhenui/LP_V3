export const useQueryStore = defineStore({
  id: 'queryStore',
  state: () => {
    return {
      query: {
        pageSize: 10,
        pageNum: 1,
      },
    };
  },
  actions: {
    setQuery(query) {
      this.query = query;
    },
  },
  getters: {
    getQuery: (state) => state.query,
  },
});
