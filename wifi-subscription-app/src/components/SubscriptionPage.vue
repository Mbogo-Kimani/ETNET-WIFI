<template>
    <div class="subscription-container">
      <div class="subscription-page">
        <!-- Page Title -->
        <h1 class="">Your Active Subscriptions</h1>
  
        <!-- Subscription Plan List -->
        <div v-if="subscriptions.length >0" class="subs">
          <div v-for="(subscription, index) in subscriptions" :key="index">
            <!-- Subscription Name -->
            <h2 class="name">{{ subscription.name }}<input type="radio" v-model="selectedPlan" value="basic" required/></h2>
  
            <!-- Subscription Expiry -->
            <p class="time">
              <strong>Expires on:</strong> {{ formatExpiryDate(subscription.expiryDate) }}
            </p>
  
            <!-- Connected Devices -->
            <div class="devices">
              <h3 class="conn">Connected Devices</h3>
              <ul class="list-disc ml-6">
                <li v-for="(device, deviceIndex) in subscription.connectedDevices" :key="deviceIndex">
                  {{ device.name }} ({{ device.type }})
                </li>
              </ul>
            </div>
  
            <!-- Renew Button -->
            <button
              @click="renewSubscription(subscription)"
              class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Add device
            </button>
          </div>
        </div>
  
        <!-- No Subscriptions Available -->
        <div v-else>
          <p class="text-xl text-center text-gray-600">You do not have any active subscriptions.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SubscriptionPage",
    data() {
      return {
        // Demo data for active subscriptions
        subscriptions: [
          {
            name: "Kumi Net",
            expiryDate: "2024-12-31T23:59:59",
            connectedDevices: [
              { name: "iPhone", type: "Mobile" },
              { name: "MacBook Pro", type: "Laptop" },
            ],
          },
          {
            name: "Family x4",
            expiryDate: "2025-01-15T12:00:00",
            connectedDevices: [
              { name: "Samsung TV", type: "Smart TV" },
              { name: "iPad", type: "Tablet" },
            ],
          },
        ],
      };
    },
    methods: {
      // Format expiry date to show it in a more readable way
      formatExpiryDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
        const expiryDate = new Date(date);
        return expiryDate.toLocaleString("en-US", options);
      },
  
      // Method to handle subscription renewal
      renewSubscription(subscription) {
        // Logic to handle renewal, e.g., API call
        alert(`Renewing ${subscription.name}...`);
      },
    },
    mounted() {
    // Ensure the page scrolls to the top when the checkout page is loaded
    window.scrollTo(0, 0);
  },
  };
  </script>
  
  <style scoped>
 .subscription-container{
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -50px;
 }

.subs{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 50px;
}

.subscription-page h1{
    color: #213061;
}
.name{
    color: #000;
}

.time, .devices{
    font-size: 20px;
    color: #213061;
}

.conn{
    color: black;
}

button {
  background: #ffc992;
  color: #eb7e03;
  padding: 15px;
  width: 100%;
  max-width: 50%;
  margin-top: 20px;
  border-radius: 16px;
  border: none;
  transition: background-color 0.3s ease;
  font-size: 18px;
  font-weight: bold;
}

button:hover {
  background-color: #eb7e03;
  color: #fff;
  cursor: pointer;
}

  </style>
  