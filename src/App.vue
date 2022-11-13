<script setup>
import { KeepAlive, onMounted, provide, ref, Transition } from 'vue';
import { useStore } from 'vuex';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './pages/TheWelcome.vue'
import Login from './pages/Login.vue';
import { RouterView } from 'vue-router';

const token = ref('Vue js Provide İnject');
const  user = ref({email:null,password:null});
const store = useStore();


 

const onAdd = (e) => {
  store.dispatch("login/addlogin",{token:user.value,role:"Admin"});
};

provide('token',token);

</script>

<template>
<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition name="slide-fade"    >
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>

          <!-- loading state -->
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
    
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.slide-fade-enter-active {
    transition: all 1s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
</style>
