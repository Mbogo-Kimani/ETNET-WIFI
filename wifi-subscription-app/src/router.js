import { createRouter, createWebHistory } from 'vue-router';
import PackageSelection from './components/PackageSelection.vue';
import CheckoutPage from './components/CheckoutPage.vue';
import SubscriptionSuccess from './components/SubscriptionSuccess.vue';
import SubscriptionError from './components/SubscriptionError.vue';


const routes = [
  { path: '/', component: PackageSelection },
  {
    path: '/checkout',
    name: 'checkout',  // Keep this name for navigation purposes
    component: CheckoutPage
  },
  { path: '/success', component: SubscriptionSuccess },
  { path: '/error', component: SubscriptionError },
];

// Create the router instance and specify the mode
const router = createRouter({
  history: createWebHistory(), // use createWebHistory if your app uses history mode
  routes,
});

  

export default router;
