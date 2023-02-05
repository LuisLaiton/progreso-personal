<script setup>
import ProPhrase from './ProPhrase.vue';
import Statistics from './Statistics.vue';
import WeeklyGoals from './WeeklyGoals.vue';

let proPhraseList = [
    {
        author: 'los cambios en la vida requieren resistencia',
        text: 'Solo los obstáculos le dan sentido a los propósitos'
    },
    {
        author: '',
        text: 'Cada que no entiendas el actuar o proceder de una persona, solo recuerda: es un simio pelón perdido en un escombro flotando en el cosmos, a la deriva de reacciones electroquímicas en su cerebro y abstracciones que ni el mismo sabe de dónde salieron'
    },
    {
        author: '',
        text: '80% de ser millonario es psicología el otro 20% es estrategia'
    },
    {
        author: 'Albert Einstein',
        text: 'Es más fácil desintegrar un átomo que un prejuicio'
    },
    {
        author: '',
        text: 'No hay nada peor que una persona motivada sin conocimientos'
    },
    {
        author: 'Confucio',
        text: 'Solo cuando una mosca se para en tus testiculos te das cuenta qué hay soluciones no violentas para los conflictos'
    },
    {
        author: '',
        text: 'No desvalides el valor de la valentía'
    },
],
    randomPhrase = Math.floor(Math.random()*(proPhraseList.length)),
    proPhrase = proPhraseList[randomPhrase]
</script>

<template>
    <section class="col-12 col-lg-9">
        <ProPhrase :proPhrase="proPhrase"/>
        <WeeklyGoals />
        <hr>
        <Statistics />
    </section>
</template>