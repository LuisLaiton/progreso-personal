<script setup>
import DailyList from './DailyList.vue';
import BtnPlus from './BtnPlus.vue';
import NewGoalDaily from './NewGoalDaily.vue';
import CalendarAside from './CalendarAside.vue';

let arrayGoals = ['Tender cama', 'Leer', 'Hacer ejercicio', 'Programar', 'Organizar habitación']

let newGoal = (goal) => {
    arrayGoals.unshift(goal)
    console.log(arrayGoals)
}
</script>

<template>
    <aside class="col-12 col-lg-3 pt-md-4 ps-md-4 ps-5 bg-dark text-bg-dark">
        <h2 class="text-primary">Metas diarias</h2>
        <p>{{ arrayGoals }}</p>
        <DailyList :arrayGoals="arrayGoals" :checkShow="true" />
        <!-- Agregar una nueva meta diaria -->
        <div class="d-flex justify-content-end">
            <BtnPlus btnColor="btn-link" />
            <NewGoalDaily @evento="newGoal" />
        </div>
        <hr class="display-celular">
        <!-- Calendario -->
        <CalendarAside />
    </aside>
</template>