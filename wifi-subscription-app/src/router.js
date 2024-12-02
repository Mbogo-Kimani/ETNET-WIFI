import { createRouter, createWebHistory } from 'vue-router';
import PackageSelection from './components/PackageSelection.vue';
import CheckoutPage from './components/CheckoutPage.vue';
import SubscriptionSuccess from './components/SubscriptionSuccess.vue';
import SubscriptionError from './components/SubscriptionError.vue';
import LoadingPage from './components/LoadingPage.vue';

const routes = [
  { path: '/', component: PackageSelection }, // Set PackageSelection as the root route
  { path: '/packages', component: PackageSelection }, // Keep the path for PackageSelection
  {
    path: '/checkout',
    name: 'checkout',  // Keep this name for navigation purposes
    component: CheckoutPage
  },
  { path: '/success', component: SubscriptionSuccess },
  { path: '/error', component: SubscriptionError },
  { path: '/loading', component: LoadingPage },
];

// Create the router instance and specify the mode
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode
  routes,
});

export default router;
