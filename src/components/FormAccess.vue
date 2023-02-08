<script setup>
import { ref } from 'vue'
import GroupButtons from './GroupButtons.vue';

const props = defineProps(["titulo", "typeForm", "btns", "user"])

const emit = defineEmits(['evento'])

const info = ref({
    name: '',
    user: '',
    password: '',
    dateBirth: '',
    gender: '',
    titleGoal: '',
    goalGoal: 0
})

if(props.user != undefined) {
    info.value = props.user
}

</script>

<template>
    <div class="card text-bg-dark mx-auto my-5 py-5 custom-card">
        <h3 class="card-title text-center text-info">{{ titulo }}</h3>
        <div class="card-body">
            <!-- Name -->
            <div class="input-group" v-if="typeForm == 'registro'">
                <span class="input-group-text text-width bg-info bg-gradient">Nombre y apellido</span>
                <input type="text" class="form-control" placeholder="Ejemplo" required v-model="info.name">
            </div>
            <!-- User -->
            <div class="input-group mb-3 mt-3" v-if="typeForm != 'semana'">
                <span class="input-group-text text-width bg-info bg-gradient">Usuario</span>
                <input type="text" class="form-control" placeholder="Usuario" required v-model="info.user">
            </div>
            <!-- Password -->
            <div class="input-group mb-3 mt-3" v-if="typeForm != 'semana'">
                <span class="input-group-text text-width bg-info bg-gradient">Contraseña</span>
                <input type="password" class="form-control" placeholder="AgHr-F5DT4" required v-model="info.password">
            </div>
            <!-- DateBirth -->
            <div class="input-group mb-3 mt-3" v-if="typeForm == 'registro'">
                <span class="input-group-text text-width bg-info bg-gradient" required>Fechas de nacimiento</span>
                <input id="startDate" class="form-control" type="date" v-model="info.dateBirth"/>
            </div>
            <!-- Gender -->
            <div class="input-group mb-3 mt-3" v-if="typeForm == 'registro'">
                <span class="input-group-text text-width bg-info bg-gradient">Genero</span>
                <select class="form-select" aria-label="Default select example" v-model="info.gender">
                    <option selected disabled>...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <!-- Meta -->
            <div class="input-group mb-3" v-if="typeForm == 'semana'">
                <span class="input-group-text text-width bg-info bg-gradient" id="basic-addon1">
                    Meta
                </span>
                <input type="text" class="form-control" placeholder="Ej. Hacer ejercicio" aria-label="Username"
                    aria-describedby="basic-addon1" v-model="info.titleGoal">
            </div>
            <!-- Cantidad -->
            <div class="input-group mb-3" v-if="typeForm == 'semana'">
                <span class="input-group-text text-width bg-info bg-gradient" id="basic-addon1">
                    Cantidad:
                    <span class="px-1">7</span>
                </span>
                <input type="range" class="form-control form-range py-4" min="1" max="7" step="1">
            </div>
        </div>
        <GroupButtons :infoBotones="btns" v-if="user == undefined"/>
        <button v-else class="btn btn-info mx-3" @click="emit('evento', info)">Siguente</button>
    </div>
</template>

<style>
.custom-card {
    width: 50%;
    min-height: 300px;
}

.text-width {
    width: 30%;
}

@media (max-width: 750px) {
    .custom-card {
        width: 90%;
        min-height: 300px;
    }
}

@media (max-width: 450px) {
    .text-width {
        width: 52%;
    }
}
</style>