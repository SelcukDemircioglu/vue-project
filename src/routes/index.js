import { createRouter, createWebHistory } from "vue-router";

 
 const routes=[
     { path: '/anasayfa', component:()=>import("../pages/TheWelcome.vue")  },
     { path: '/', component:()=>import("../pages/Login.vue")  },
     { path: '/transitiongroup', component:()=>import("../pages/Transitiongroup.vue")  },
     { path: '/slots', component:()=>import("../pages/Slots.vue")  },
     { path: '/teleports', component:()=>import("../pages/Teleports.vue")  },
     { path: '/keepalive', component:()=>import("../pages/Keepalive.vue")  },

 ]


 const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

 