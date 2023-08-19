import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HomePage from './views/HomePage.vue'; 


const app = createApp(App);

app.use(router);
app.component('HomePage', HomePage); // Register the component
app.mount('#app');