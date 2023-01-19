<script setup>
const emit = defineEmits(['evento']) // Declara un evento personalizado llamado "evento"
let goal = "" // Inicializa una variable "goal" vacía
</script>

<template>
    <div class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="offcanvasTopLabel">Nueva meta</h3>
            <!-- Boton para cerrar la ventana -->
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <form class="offcanvas-body">
            <div class="input-group mb-3">
                <!-- Input para ingresar la meta diaria -->
                <input v-model="goal" type="text" class="form-control" placeholder="Agrega una nueva meta para hoy"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <!-- Boton para agregar la meta -->
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" data-bs-dismiss="offcanvas"
                    aria-label="Close" @click="emit('evento', goal)">Agregar</button>
            </div>
        </form>
    </div>
</template>