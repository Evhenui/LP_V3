export const useAdditionalStore = defineStore({
    id: 'additionalStore',
    state: () => {
      return {
        menuItems: ['Блог', 'О нас', 'Сотрудничество', 'Контакты',],
      };
    },
    actions: {

    },
    getters: {
      getMenuItems: (state) => state.menuItems,
    },
  });
  