export const useCartStore = defineStore({
  id: 'cartStore',
  state: () => {
    return {
      cart: [],
    };
  },
  actions: {
    addItem(item) {
      this.cart = [...this.cart, item];
    },
  },
  getters: {
    getCart: (state) => state.cart,
  },
});
