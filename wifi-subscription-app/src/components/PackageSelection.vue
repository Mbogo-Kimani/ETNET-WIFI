<template>
    <div class="package-selection">
      <div v-for="(pkg, index) in packages" :key="index" class="package">
        <p>{{ pkg.duration }}</p>
        <p>Ksh {{ pkg.price }}</p>
        <button @click="goToCheckout">Get Access</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        packages: [
          { duration: '40 Minutes', price: 10 },
          { duration: '8 Hours', price: 20 },
          { duration: '24 Hours', price: 50 },
          { duration: '7 Days', price: 380 },
          { duration: '30 Days', price: 1000 },
          { duration: '30 Days (3 Devices)', price: 1300 }
        ]
      };
    },
    methods: {
      goToCheckout() {
        this.$router.push('/checkout');
      }
    }
  };
  </script>
  
  <style scoped>
  .package-selection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .package {
    background: #f9f9f9;
    padding: 20px;
    margin: 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
  button {
    background: orange;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
  }
  </style>
  