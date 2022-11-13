<script setup>
import { ref, Teleport } from 'vue'
const open = ref(false);

</script>

<template  >
    
    <div class="m-5 p-5   shadow">
        
        <h3>Teleoprts modal and element add child elements</h3>
        <button class="btn btn-primary w-25 text-center" @click="open = true">Open Modal</button>
        <button class="btn btn-primary w-25 text-center" @click="open = true">Add Element</button>
        <h6>Add Eleemnt App outer id=modals elemendts</h6>
    </div>
    <Teleport  to="#modals" >
            <div v-if="open" class="modal d-block   "   tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close"  aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="open=false"  >Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
        </div>
        </Teleport>
</template>

<style scoped>
 
</style>