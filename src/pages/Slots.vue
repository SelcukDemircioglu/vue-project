<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
import { inject } from 'vue'

const valtoken=inject('token');

</script>

<template   >
 <div class="container d-flex flex-column justify-content-center">
   {{valtoken}}
   
  <WelcomeItem>
    
    <template #icon>
      <DocumentationIcon  />
    </template>

    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Slots</a>
     
  </WelcomeItem>
 
 </div>
  
</template>
