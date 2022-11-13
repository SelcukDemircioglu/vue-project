<template>
    
    
        <div class="w-100 d-flex justify-content-center align-items-center">
           <div class="shadow w-25 border p-5 d-flex flex-column align-items-center " >
                 <h6 >Kullanıcı Adı</h6>
                 <input :value="email" @input="emit('update:email',$event.target.value)" class="form-control w-100"   /> 
                  <h6 class="mt-1" >Şifre</h6>
                 <input :value="password" @input="emit('update:password',$event.target.value)" class="form-control w-100"   />
                 <button @click="router.push('/anasayfa')" class="btn btn-primary mt-2 w-100">Giriş</button>
          </div>
      </div>
   
   
</template>

<script setup>
 import {useRouter} from 'vue-router'
  const props= defineProps(["email","password"]);
  const emit=defineEmits(["update:email","update:password","onlogin"]);
  const router = useRouter();  
  
</script>

<style   scoped>
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
</style>