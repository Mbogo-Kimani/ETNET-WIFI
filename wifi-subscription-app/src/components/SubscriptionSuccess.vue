<template>
    <div class="success-page">
      <img src="@/assets/success-icon.png" alt="Success" class="success-icon">
      <p>Success</p>
      <p>Your subscription was successful</p>
      <button @click="goHome">OK</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .success-page {
    text-align: center;
    max-width: 400px;
    margin: auto;
  }
  .success-icon {
    width: 50px;
  }
  button {
    background: orange;
    color: white;
    padding: 10px;
  }
  </style>
  