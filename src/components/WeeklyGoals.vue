<script setup>
import BtnTransparent from './BtnTransparent.vue'
import GroupButtons from '@/components/GroupButtons.vue'

const weekList = [
    {
        goal: 7,
        Advance: 2,
        title: 'Tender la cama'
    },
    {
        goal: 7,
        Advance: 5,
        title: 'Programar'
    },
    {
        goal: 3,
        Advance: 1,
        title: 'Ciclismo'
    },
    {
        goal: 4,
        Advance: 2,
        title: 'Ejercicio'
    },
],
botones = [
    {
        text: "Nueva semana",
        url: "/nuevaSemana",
        style: "btn-outline-success"
    }
]

for (let i of weekList) {
    i.percentage = (i.Advance * 100) /i.goal
    i.percentage = parseFloat(i.percentage.toFixed(1))
}

</script>

<template>
    <!-- Metas semanales -->
    <article class="my-4 container">
            <h2>Metas semanales</h2>
            <div v-for="item in weekList">
                <div class="progress">
                    <div class="progress-bar bg-success" :style="{ width: item.percentage + '%' }">
                        {{ item.percentage }} %
                    </div>
                </div>
                <p>{{ item.title }}</p>
            </div>
            <div class="d-flex justify-content-end">
                <GroupButtons :infoBotones="botones" />
            </div>
        </article>
</template>