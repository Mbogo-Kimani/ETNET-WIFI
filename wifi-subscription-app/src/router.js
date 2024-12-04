import { createRouter, createWebHistory } from 'vue-router';
import PackageSelection from './components/PackageSelection.vue';
import CheckoutPage from './components/CheckoutPage.vue';
import SubscriptionSuccess from './components/SubscriptionSuccess.vue';
import SubscriptionError from './components/SubscriptionError.vue';
import ContactPage from './components/ContactPage.vue';
import SubscriptionPage from './components/SubscriptionPage.vue'; // Import the SubscriptionPage component

const routes = [
  { path: '/', component: PackageSelection }, // Root route
  { path: '/packages', component: PackageSelection },
  {
    path: '/checkout',
    name: 'checkout', // Named route for checkout
    component: CheckoutPage,
  },
  { path: '/success', component: SubscriptionSuccess },
  { path: '/error', component: SubscriptionError },
  { 
    path: '/contact', // Route for ContactPage
    name: 'contact', // Named route for easier navigation
    component: ContactPage, 
  },
  {
    path: '/subscriptions', // Route for the SubscriptionPage
    name: 'subscriptions', // Named route for easier navigation
    component: SubscriptionPage,
  },
];

// Create the router instance and specify the mode
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode
  routes,
});

export default router;



