import Vue from 'vue';
import VueRouter from 'vue-router';
import PackageSelection from './components/PackageSelection.vue';
import CheckoutPage from './components/CheckoutPage.vue';
import SubscriptionSuccess from './components/SubscriptionSuccess.vue';
import SubscriptionError from './components/SubscriptionError.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PackageSelection },
  { path: '/checkout', component: CheckoutPage },
  { path: '/success', component: SubscriptionSuccess },
  { path: '/error', component: SubscriptionError }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
