import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import mask from './directives/mask/index.ts';
import { key, store } from './store/index.ts'

library.add(faMagnifyingGlass, faCircleArrowLeft)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('mask', mask)
app.use(store, key)
app.use(router)
app.mount('#app')
