<template>
  <div class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>Barrio Fiesta Menu</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
      <h1>Main Course</h1><br>
    <div class="row">
      <Item
        v-for="item in MainCourse"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
      <h1>Appetizers</h1><br>
    <div class="row">
      <Item
        v-for="item in Appetizer"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
      <h1>Drinks</h1><br>
    <div class="row">
      <Item
        v-for="item in Drinks"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  name: 'app',
  computed: {
    MainCourse() { return this.$store.getters.MainCourse },
    Appetizer() {return this.$store.getters.Appetizer},
    Drinks() {return this.$store.getters.Drinks}
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
