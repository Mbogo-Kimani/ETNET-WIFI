<template>
  <div class="message">
    <div class="success-page">
      <div class="icon-ring">
      <img src="@/assets/success-icon.png" alt="Success" class="success-icon">
    </div>
      <p class="success">Success</p>
      <p class="mess">Your subscription was successful</p>
      <button @click="goHome">OK</button>
    </div>
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

  .message{
    background: whitesmoke;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -50px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 24px;
    width: auto;
    height: 100%;
  }

  .success-page {
    border-radius: 12px;
    color: #fff;
    padding: 15px;
    background-color: #202b61;
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 40px;
    margin: auto;
    padding-top: 50px
  }
  .success-icon {
    width: 45px;
  }

.success{
  font-weight: 700;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.mess{
  font-weight: 500;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

  button {
    background: #007bff;
    color: #fff;
    padding: 15px;
    width: 100%;
    max-width: 70%;
    margin-bottom: 30px;
    border-radius: 16px;
    border-style: none;
    background-color: #f99526;
    transition: 0.3s ease;
  }

  button:hover{
    background-color: #eb7e03;
    cursor: pointer
  }

  .icon-ring {
  display: inline-block; /* Ensure it fits content size */
  padding: 10px; /* Control the size of the ring */
  border: 2px solid #704fde; /* Set ring color and thickness */
  border-radius: 100%; /* Makes the border circular */
  text-align: center; /* Center content inside the circle */
}
  </style>
  