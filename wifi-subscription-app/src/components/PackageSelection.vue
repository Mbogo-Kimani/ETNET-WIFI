<template>
  <div class="package-selection">
    <div v-for="(pkg, index) in packages" :key="index" class="package">
      <p class="time">{{ pkg.duration }}</p>
      <p class="ksh"><span>Ksh</span> {{ pkg.price }}</p>
      <!-- Pass only duration and price to the checkout page -->
      <button @click="goToCheckout(pkg.duration, pkg.price)">Get Access</button>
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
          { duration: '30 Days (3 Devices)', price: 1300 },
          { duration: '30 Days (4 Devices)',  price: 1600 },
          { duration: '30 Days (6 Devices)', price: 2000 },
          { duration: '90 Days (3 Devices)', price: 3500 },
          { duration: '90 Days (4 Devices)', price: 4200 },
          { duration: '90 Days (5 Devices)', price: 4800 },
          { duration: '90 Days (6 Devices)', price: 5300 }
        ]
      };
    },
    methods: {
    goToCheckout(duration, price) {
      // Pass only the name and price to the checkout page via the router's state
      this.$router.push({ name: 'checkout', state: { duration, price } });
      }
    }
  };
  </script>
  
  <style scoped>
  .package-selection {
    background: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -90px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 24px;
    width: auto
    
  }
  .package {
    border-radius: 12px;
    background: #fff;
    padding: 1px;
    margin: 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    box-shadow: 8px black;
  }

  .time{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #202b61;
    margin-bottom: -45px;
  }

  .ksh{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #704fde;
     font-size: 50px;
     font-weight: 900;
     margin-bottom: -0.1px
  }

  span{
    font-size: 20px;
    font-weight: 900;
  }

  button {
    background: #f99526;
    color: #fff;
    font-weight: 900;
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 8px;
    border-radius: 12px;
    width: 70%;
    margin-bottom: 15px;
    outline-style: none;
    border-style: none;
    transition: 0.3s ease;
  }

  button:hover{
    background-color: #eb7e03;
    cursor: pointer
  }
  </style>
  