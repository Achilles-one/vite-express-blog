import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
// 设置服务端公共地址
axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App);

// 全局使用axios
app.provide("axios", axios);
// 在需要使用的地方用inject注入
// import { inject } from "vue";
// const axios = inject("axios");
app.provide("server_url", axios.defaults.baseURL);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
