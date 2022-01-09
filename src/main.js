import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import "tailwindcss/tailwind.css";
import store from "./store";
import "./input.css";
// import "./assets/tailwind.css";
import "./assets/style.css";
import "./assets/bootstrap.css";

createApp(App).use(store).use(router).mount("#app");
