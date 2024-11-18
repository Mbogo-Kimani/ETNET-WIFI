<template>
  <div class="pay">
    <div class="checkout-page">
      <!-- Use the passed duration and price from the router's state -->
      <p><img src="@/assets/mpesa-icon.png" alt="Error" class="mpesa-icon"><span class="span1">Ksh {{ price }}</span> for {{ duration }}</p>
      <input type="tel" placeholder="+254 M~pesa number" v-model="phoneNumber" required/>
      <button @click="payNow">Pay Now</button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      phoneNumber: '',
      // Use the passed name and price from router's state
      duration: this.$route.state?.duration || 'Package', // Default value in case the data is not passed
      price: this.$route.state?.price || 0 // Default to 0 if price is undefined
    };
  },

  created() {
    if (this.$route.state) {
      this.duration = this.$route.state.duration || 'Package';  // Fallback value
      this.price = this.$route.state.price || 0;  // Fallback value
    }
  },

  methods: {
    payNow() {
      // Handle payment logic or navigate to success page
      this.$router.push('/success'); // Replace with error route on failure
        this.$router.push('/success');  // Replace with error route on failure
      }
    }
  };

  </script>
  
  <style scoped>

  .pay{
    background: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -90px;
    padding-top: 30px;
    padding-bottom: 50px;
    border-radius: 24px;
    width: auto;
    height: 100%;
    
  }

  .checkout-page {
    background-color: #202b61;
    text-align: center;
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 15px;
    border-radius: 12px;
    height: auto;
    margin: 50px;
  }

  input{
    padding-left: 10px;
    padding: 5px;
    color: #fff;
    border-style: double;
    border-color:  #ffff;
    background-color: transparent;
    width: 100%;
    max-width: 80%;
    margin-bottom: 40px;
    border-radius: 16px;
    height: 35px;
  }

  .mpesa-icon{
    width: 30px;
    margin-bottom: -6px
  }

  p{
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 40px;
    color: white;
    margin-top: 30px;
  }

  .span1{
    color: #00ff00;
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
    background-color: #00ff00;
    transition: 0.3s ease;
  }

  button:hover{
    background-color: #02cf02;
    cursor: pointer;
  }

  ::placeholder{
    color: #fff;
  }
  span{
    color: #00ff00;
  }
  </style>
  