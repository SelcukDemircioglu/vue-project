<script setup>
import { shallowRef } from 'vue'
import CompA from '../components/CompA.vue';
import CompB from '../components/CompB.vue';
 
const current = shallowRef(CompA)
</script>

<template>
  <div class="demo m-5 border shadow p-5">
    <h3>KeepAlive</h3>
    <h6>Component change and select add</h6>
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
