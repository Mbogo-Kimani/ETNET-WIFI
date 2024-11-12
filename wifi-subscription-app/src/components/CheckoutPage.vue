<template>
    <div class="checkout-page">
      <p>Ksh 10 for Kumi Net</p>
      <input type="tel" placeholder="+254 M-pesa number" v-model="phoneNumber">
      <button @click="payNow">Pay Now</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phoneNumber: ''
      };
    },
    methods: {
      payNow() {
        this.$router.push('/success');  // Replace with error route on failure
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-page {
    text-align: center;
    max-width: 400px;
    margin: auto;
  }
  button {
    background: #007bff;
    color: #fff;
    padding: 10px;
    width: 100%;
  }
  </style>
  