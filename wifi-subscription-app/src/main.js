import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import router
import './assets/tailwind.css';


// Use router in the app instance
createApp(App).use(router).mount('#app');

