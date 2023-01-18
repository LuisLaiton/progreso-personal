<script setup>
const emit = defineEmits(['evento'])
let goal = ""
</script>

<template>
    <div class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="offcanvasTopLabel">Nueva meta</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <form class="offcanvas-body">
            <div class="input-group mb-3">
                <input v-model="goal" type="text" class="form-control" placeholder="Agrega una nueva meta para hoy"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" data-bs-dismiss="offcanvas" aria-label="Close" @click="emit('evento', goal)">Agregar</button>
            </div>
        </form>
    </div>
</template>