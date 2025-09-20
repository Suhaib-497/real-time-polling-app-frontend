import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createPinia } from 'pinia';
import 'aos/dist/aos.css'

const app=createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
// app.use(MotionPlugin);

