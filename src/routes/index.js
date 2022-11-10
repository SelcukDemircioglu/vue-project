import { createRouter, createWebHistory } from "vue-router";

 
 const routes=[
     { path: '/anasayfa', component:()=>import("../pages/TheWelcome.vue")  },
     { path: '/', component:()=>import("../pages/Login.vue")  },

 ]


 const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

 