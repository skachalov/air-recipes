import { createApp } from 'vue'
import App from './App.vue'
import storage from "@/storage";

createApp(App)
    .use(storage)
    .mount('#app')
