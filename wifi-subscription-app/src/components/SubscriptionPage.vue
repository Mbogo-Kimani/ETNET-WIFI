<template>
    <div class="subscription-page" v-if="subscription">
      <header class="header">
        <img src="@/assets/logo.png" alt="ET NET Logo" class="logo" />
      </header>
      <main class="content">
        <div class="status">
          <h2>You’re {{ subscription.status }}</h2>
        </div>
        <div class="subscriptions">
          <h3>Subscriptions</h3>
          <div class="plan-details">
            <p><strong>{{ subscription.subscriptions.plan }}</strong></p>
            <p>
              <span class="expiry">Exp: {{ subscription.subscriptions.expiry }}</span>
            </p>
          </div>
          <div class="devices">
            <p v-for="device in subscription.subscriptions.devices" :key="device">{{ device }}</p>
          </div>
        </div>
        <div class="add-device">
          <p>
            Add device to an existing plan
            <span class="add-icon">+</span>
          </p>
        </div>
        <button class="buy-bundle-btn">Buy another bundle</button>
      </main>
    </div>
    <div v-else>
      <p>Loading subscription details...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "SubscriptionPage",
    data() {
      return {
        subscription: null,
      };
    },
    created() {
      // Fetch subscription details from the backend
      axios.get('http://localhost:3000/api/subscription_details')
        .then(response => {
          this.subscription = response.data;
        })
        .catch(error => {
          console.error("Error fetching subscription details:", error);
        });
    }
  };
  </script>
  
  <style scoped>
  .subscription-page {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    background-color: #f4f4f9;
    height: 100vh;
  }
  
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo {
    max-width: 120px;
  }
  
  .content {
    width: 100%;
    max-width: 400px;
    text-align: center;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .status h2 {
    color: #243c75;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  
  .subscriptions {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .subscriptions h3 {
    color: #213061;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  
  .plan-details {
    margin-bottom: 15px;
  }
  
  .plan-details p {
    margin: 5px 0;
  }
  
  .expiry {
    color: #4caf50;
    font-weight: bold;
  }
  
  .devices p {
    margin: 5px 0;
  }
  
  .add-device {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .add-icon {
    color: #243c75;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;
  }
  
  .buy-bundle-btn {
    background-color: #ffc992;
    color: #213061;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .buy-bundle-btn:hover {
    background-color: #eb7e03;
    color: #ffffff;
  }
  </style>