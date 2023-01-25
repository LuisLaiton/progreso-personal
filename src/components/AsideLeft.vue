<script setup>
import {ref} from 'vue'
import DailyList from './DailyList.vue'; // importa el componente DailyList
import BtnPlus from './BtnPlus.vue'; // importa el componente BtnPlus
import NewGoalDaily from './NewGoalDaily.vue'; // importa el componente NewGoalDaily
import CalendarAside from './CalendarAside.vue'; // importa el componente CalendarAside

let arrayGoals = ref([ // array con las metas diarias
    {
        pend: true,
        title: 'Tender cama'
    },
    {
        pend: true,
        title: 'Leer'
    }, 
    {
        pend: false,
        title: 'Hacer ejercicio'
    }, 
    {
        pend: true,
        title: 'Programar'
    },
    {
        pend: true,
        title: 'Organizar habitación'
    }
])

let newGoal = (goal) => {
    arrayGoals.value.unshift({pend: true,
                              title: goal}) // agrega una nueva meta al array
    console.log(arrayGoals.value) // muestra el array en la consola
}
let checkGoal = (index) =>{
    arrayGoals.value[index].pend = !arrayGoals.value[index].pend
}
</script>

<template>
    <aside class="col-12 col-lg-3 pt-md-4 ps-md-4 ps-5 bg-dark text-bg-dark">
        <h2 class="text-primary">Metas diarias</h2>
        <DailyList :arrayGoals="arrayGoals" @evento="checkGoal" />
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
