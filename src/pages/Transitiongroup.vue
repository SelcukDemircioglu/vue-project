<template>
    <div class="contanier m-5 p-4 shadow">
        <h4 class="d-flex align-items-center justify-content-center border w-100  ">TransitionGroup</h4>
        <input class="form-control" v-model="text" />
        <button class="btn btn-primary mt-2" @click="items.push({key:index++,title:text})">Ekle</button>
        <TransitionGroup class="mt-2" name="list" tag="ul">
        <li class="mt-1" v-for="item in items" :key="item" >
            <button class="btn btn-outline-danger" @click="items=items.filter((x)=>x.key!==item.key)" >
              {{item.title}}
               <TrashIcon   />
            </button> 
            
         </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { ref} from 'vue';
import TrashIcon from 'vue-material-design-icons/TrashCan.vue';

  const items = ref([]);
  const index = ref(0);
  const text = ref('')

</script>

<style   scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}



</style>