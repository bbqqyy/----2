import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, Icon, NavBar, Tabbar} from 'vant';
import {createRouter, createWebHistory} from "vue-router";
import routes from "./config/route.ts";

const app = createApp(App);

// 方式一. 通过 app.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);

const router  = createRouter({
    history: createWebHistory(),
    routes: routes,
});

app.use(router);
app.mount('#app')

