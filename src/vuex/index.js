import { createStore } from "vuex";

export default createStore({
  state: {
    // 後台手機版 menu
    isMenuOpen: false,
    // 通知 navbar 加入購物車
    isAddToCart: false,
    // 前往某類型的商品頁
    productType: "",
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    addToCart(state) {
      state.isAddToCart = !state.isAddToCart;
    },
    setProductType(state, value) {
      state.productType = value;
    },
  },
  actions: {},
});
