<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
 import Routes from '../routes'
import { inject,ref, } from 'vue'

const valtoken=inject('token');
 
const list= ref(Routes.getRoutes());

</script>

<template   >
 <div  class="container d-flex flex-column justify-content-center">
   {{valtoken}}
   
  <WelcomeItem v-for="item in list" >
  
    <template #icon>
      <DocumentationIcon  />
    </template>
    <template #heading></template>
    <a href='item.path' target="_blank" rel="noopener">{{item.path}}</a>
  </WelcomeItem>
 
 </div>
  
</template>
