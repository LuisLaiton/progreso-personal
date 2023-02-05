<script setup>
import { ref } from 'vue'
import FormAccess from '../components/FormAccess.vue'
import infoWeek from '../components/infoWeek.vue'
import ResumeWeek from '../components/ResumeWeek.vue'

const botones = [
    {
        text: "Agregar",
        url: "/",
        style: "btn-info"
    }
],
    thisWeek = ref([
        {
            goal: 7,
            Advance: 2,
            title: "Tender la cama"
        },
        {
            goal: 7,
            Advance: 5,
            title: "Programar"
        },
        {
            goal: 3,
            Advance: 1,
            title: "Ciclismo"
        },
        {
            goal: 4,
            Advance: 2,
            title: "Ejercicio"
        }
    ])

const newGoal = ( title) => {
    thisWeek.value.push(
        {
            goal: 'goal',
            Advance: 0,
            title: title
        })
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <infoWeek />
    </div>
    <FormAccess titulo="Nueva semana" typeForm="semana" :btns="botones"/>
    <ResumeWeek :goals="thisWeek" />
</template>