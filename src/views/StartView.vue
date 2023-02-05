<script setup>
import { RouterLink } from 'vue-router'
import GroupButtons from '@/components/GroupButtons.vue'

const botones = [
    {
        text: "Iniciar sesión",
        url: "/login",
        style: "btn-warning"
    },
    {
        text: "Registrate",
        url: "/registro",
        style: "btn-outline-warning"
    }
]
</script>

<template>
    <div class="card text-bg-dark">
        <img src="https://i.pinimg.com/originals/cf/64/85/cf648573dbd90bdfc3f9c547517fb64b.jpg" class="card-img"
            alt="...">
        <div class="card-img-overlay text-center container px-5 d-flex flex-column justify-content-center">
            <blockquote class="blockquote my-5">
                <h3 class="my-4">El cambio siempre supone resistencia, porque establecer un nuevo hábito supone un esfuerzo y todo nuestro ser nos pide, aunque nos estemos comportando de forma perjudicial para nosotros mismos, seguir actuando como lo veníamos haciendo</h3>
                <footer class="blockquote-footer">
                    <cite title="Source Title"></cite>
                </footer>
            </blockquote>
            <GroupButtons infoBotones="false" :infoRouter="botones"/>
        </div>
    </div>
</template>