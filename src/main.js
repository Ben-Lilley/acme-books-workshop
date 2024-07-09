/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import { useAppStore } from './stores/app'
import { getBooks } from './services/api.service'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
registerPlugins(app)

app.mount('#app')

const store = useAppStore()

getBooks().then((books)=>{
    store.setBooks(books);
})