<template>
    <div class="error-page">
      <img src="@/assets/error-icon.png" alt="Error" class="error-icon">
      <p>Failed</p>
      <p>Process timed out</p>
      <button @click="retry">Try again</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      retry() {
        this.$router.push('/checkout');
      }
    }
  };
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    max-width: 400px;
    margin: auto;
  }
  .error-icon {
    width: 50px;
  }
  button {
    background: orange;
    color: white;
    padding: 10px;
  }
  </style>
  