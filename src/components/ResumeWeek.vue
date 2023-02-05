<script setup>
import GroupButtons from './GroupButtons.vue'

defineProps(['goals'])

const botones = [
    {
        text: "Guardar",
        url: "/",
        style: "btn-outline-warning"
    }
]
</script>

<template>
    <!-- Resumen -->
    <section class="card mx-auto text-bg-dark mx-auto m-5 py-4 custom-card">
        <div class="card-header row text-center">
            <h5 class="text-warning">Resumen</h5>
        </div>
        <!-- Items a mostrar -->
        <ul class="list-group list-group-flush px-3 my-4">
            <li class="list-group-item text-white bg-warning bg-opacity-10 border border-warning border-end-0 rounded-start px-5 d-flex" v-for="(item, index) in goals" :key="index">
                <button class="me-auto btn btn-outline-danger">Editar</button>
                {{ item.title }} - {{ item.goal }}
            </li>
        </ul>
        <GroupButtons :infoBotones="botones" />
    </section>
</template>