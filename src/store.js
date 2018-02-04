import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    MainCourse: [
      { invId: 1, name: 'Sinigang Hipon', image: '//placehold.it/200', price: 299 },
      { invId: 2, name: 'Bicol Express', image: '//placehold.it/200', price: 340 },
      { invId: 3, name: 'Igado', image: '//placehold.it/200', price: 285 },
      { invId: 4, name: 'Patatim', image: '//placehold.it/200', price: 504 },
      { invId: 5, name: 'Kuhol sa Gata', image: '//placehold.it/200', price: 226 },
      { invId: 6, name: 'Binagoongang Baboy', image: '//placehold.it/200', price: 215 },
      { invId: 7, name: 'Kare-Kare', image: '//placehold.it/200', price: 275 },
      { invId: 8, name: 'Mama Chits Special', image: '//placehold.it/200', price: 790 },
    ],
    Appetizer: [
      { invId: 1, name: 'Green Mango Salad', image: '//placehold.it/200', price: 135 },
      { invId: 2, name: 'Calamares', image: '//placehold.it/200', price: 330 },
      { invId: 3, name: 'Sizzling Gambas', image: '//placehold.it/200', price: 330 },
      { invId: 4, name: 'Chicken Sisig', image: '//placehold.it/200', price: 238 },
      { invId: 5, name: 'Bangus Sisig', image: '//placehold.it/200', price: 235 },
      { invId: 6, name: 'COMBO #1', image: '//placehold.it/200', price: 936 },
      { invId: 7, name: 'COMBO #2', image: '//placehold.it/200', price: 1160 },
      { invId: 8, name: 'COMBO #3', image: '//placehold.it/200', price: 1190 },
    ],
    Drinks: [
      { invId: 1, name: 'Sago at Gulaman', image: '//placehold.it/200', price: 69 },
      { invId: 2, name: 'Bottled Water', image: '//placehold.it/200', price: 40 },
      { invId: 3, name: 'Iced Tea (Glass)', image: '//placehold.it/200', price: 59 },
      { invId: 4, name: 'Mango Shake', image: '//placehold.it/200', price: 125 },
      { invId: 5, name: 'Pineapple Jiuce', image: '//placehold.it/200', price: 69 },
      { invId: 6, name: 'Mango Jiuce', image: '//placehold.it/200', price: 69 },
      { invId: 7, name: 'Orange Jiuce', image: '//placehold.it/200', price: 69 },
      { invId: 8, name: 'Guyabano Jiuce', image: 'https://sc02.alicdn.com/kf/HTB1mIiAKFXXXXaSXXXXq6xXFXXXQ/GUYABANO-SOURSOP-FLAVOR.jpg', price: 69 },
    ],
    inCart: [],
  },
  getters: {
    MainCourse: state => state.MainCourse,
    Appetizer: state => state.Appetizer,
    Drinks: state => state.Drinks,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});
