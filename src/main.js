import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';
import router from './router';
import store from './store/indexstore.js';

const app = createApp(App);
// createApp(App).use(router).mount('#app');
// createApp(App).use(store).mount('#app');
// createApp(App).use(store);
app.use(store);
app.use(router);
app.mount('#app');
