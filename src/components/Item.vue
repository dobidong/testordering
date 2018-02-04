<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | dollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
          <div id='toast'>Added to Cart</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters'
//const dollars = num => num / 1

export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
      this.showToast()
    },  
    showToast() {
      var x=document.getElementById("toast");
      x.classList.add("show");
      setTimeout(function(){
        x.classList.remove("show");
      },1000);
    }
  }
}
</script>

<style>
#toast {
  position: fixed;
  top:0%;
  left:50%;
  transform:translate(-50%);
  background-color: blue;
  color: #fff;
  padding: 16px;
  border-radius: 4px;
  text-align:center;
  z-index:1;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  visibility:hidden;
}
#toast.show {
  visibility: visible;
  animation:fadeInOut 3s;
}

@keyframes fadeInOut{
  5%,95%{opacity:1;top:30px}
  15%,85%{opacity:1;top:30px}
}
</style>