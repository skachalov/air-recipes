import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import "vuetify/lib/styles/main.css"
import "@mdi/font/css/materialdesignicons.css"
import {createVuetify} from "vuetify";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi'
    }
})


loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
