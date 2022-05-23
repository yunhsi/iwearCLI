import { createStore } from "vuex";

export default createStore({
  state: {
    // 後台手機版 menu
    isMenuOpen: false,
    // 通知 navbar 加入購物車
    isAddToCart: false,
    // 前往某框型的商品頁
    frameType: {},
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    addToCart(state) {
      state.isAddToCart = !state.isAddToCart;
    },
    setFrameType(state, value) {
      state.frameType = value;
    },
  },
  actions: {},
});
