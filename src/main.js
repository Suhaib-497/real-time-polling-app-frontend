import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createPinia } from 'pinia';
import 'aos/dist/aos.css'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import SocialSharing from 'vue-social-sharing'
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: 8081,
  wssPort: 8081, // optional if using wss
  forceTLS: import.meta.env.VITE_REVERB_SCHEME === 'https',
  encrypted: import.meta.env.VITE_REVERB_SCHEME === 'https',
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
})

const app=createApp(App);
app.use(router);
app.use(createPinia());
app.use(SocialSharing);
app.mount('#app');
// app.use(MotionPlugin);

