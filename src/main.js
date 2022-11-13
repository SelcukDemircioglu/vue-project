import { createApp } from 'vue'
import App from './App.vue'
 

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import 'vue-material-design-icons/styles.css';
import store from './store';
import router from './routes';
 
const app=createApp(App);
app.use(router);
app.use(store);

app.mount('#app');

