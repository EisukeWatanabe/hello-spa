import Vue from 'vue';
import VueRouter from "vue-router";

import Home from "./pages/Home";
import Searchlp from "./pages/SearchIp";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search_ip',
      component: Searchlp
    }
  ]
});

export default router;
