<script setup>
import DailyList from './DailyList.vue'; // importa el componente DailyList
import BtnPlus from './BtnPlus.vue'; // importa el componente BtnPlus
import NewGoalDaily from './NewGoalDaily.vue'; // importa el componente NewGoalDaily
import CalendarAside from './CalendarAside.vue'; // importa el componente CalendarAside

let arrayGoals = ['Tender cama', 'Leer', 'Hacer ejercicio', 'Programar', 'Organizar habitación'] // array con las metas diarias

let newGoal = (goal) => {
    arrayGoals.unshift(goal) // agrega una nueva meta al array
    console.log(arrayGoals) // muestra el array en la consola
}
</script>

<template>
    <aside class="col-12 col-lg-3 pt-md-4 ps-md-4 ps-5 bg-dark text-bg-dark">
        <h2 class="text-primary">Metas diarias</h2>
        <p>{{ arrayGoals }}</p> <!-- Muestra el array de metas diarias -->
        <DailyList :arrayGoals="arrayGoals" :checkShow="true" />
        <!-- utiliza el componente DailyList para mostrar las metas diarias -->
        <!-- Agregar una nueva meta diaria -->
        <div class="d-flex justify-content-end">
            <BtnPlus btnColor="btn-link" /> <!-- Utiliza el componente BtnPlus para mostrar un botón -->
            <NewGoalDaily @evento="newGoal" />
            <!-- Utiliza el componente NewGoalDaily para agregar una nueva meta diaria -->
        </div>
        <hr class="display-celular">
        <!-- Calendario -->
        <CalendarAside /> <!-- Utiliza el componente CalendarAside para mostrar el calendario -->
    </aside>
</template>
