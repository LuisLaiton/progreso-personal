<script setup>
import GroupButtons from './GroupButtons.vue';

defineProps(["titulo", "loginDisabled", "btns"])
</script>

<template>
    <div class="card text-bg-dark mx-auto my-5 py-5" id="login">
        <h3 class="card-title text-center text-info">{{ titulo }}</h3>
        <div class="card-body">
            <!-- Name -->
            <div class="input-group" v-if="loginDisabled == 'true'">
                <span class="input-group-text text-width bg-info bg-gradient">Nombre y apellido</span>
                <input type="text" class="form-control" placeholder="Ejemplo" required>
            </div>
            <!-- User -->
            <div class="input-group mb-3 mt-3">
                <span class="input-group-text text-width bg-info bg-gradient">Usuario</span>
                <input type="text" class="form-control" placeholder="Usuario" required>
            </div>
            <!-- Password -->
            <div class="input-group mb-3 mt-3">
                <span class="input-group-text text-width bg-info bg-gradient">Contraseña</span>
                <input type="password" class="form-control" placeholder="AgHr-F5DT4" required>
            </div>
            <!-- DateBirth -->
            <div class="input-group mb-3 mt-3" v-if="loginDisabled == 'true'">
                <span class="input-group-text text-width bg-info bg-gradient" required>Fechas de nacimiento</span>
                <input id="startDate" class="form-control" type="date" />
            </div>
            <!-- Gender -->
            <div class="input-group mb-3 mt-3" v-if="loginDisabled == 'true'">
                <span class="input-group-text text-width bg-info bg-gradient">Genero</span>
                <select class="form-select" aria-label="Default select example">
                    <option selected disabled>...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                </select>
            </div>
        </div>
        <GroupButtons :infoBotones="btns" />
    </div>
</template>

<style>
#login {
    width: 50%;
    min-height: 300px;
}

.text-width {
    width: 30%;
}
</style>