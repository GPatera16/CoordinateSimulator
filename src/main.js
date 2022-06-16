import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'v-calendar/dist/style.css';
const app = createApp(App)
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
app.use(SetupCalendar, {})
app.use(Calendar, {})
// Use the components
app.component('DatePicker', DatePicker)

app.mount('#app')
