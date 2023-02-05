<script setup>
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
    <section class="card text-bg-dark">
        <!-- Imagen horizontal -->
        <img src="https://i.pinimg.com/originals/cf/64/85/cf648573dbd90bdfc3f9c547517fb64b.jpg" class="card-img img-vertical" alt="imagend de fondo">
        <!-- Imagen vertical -->
        <img src="https://i.pinimg.com/originals/94/7c/87/947c878cc25e4b789ce34d46fa3b58cb.jpg" class="card-img img-horizontal" alt="imagend de fondo">
        <div class="card-img-overlay text-center container px-5 d-flex flex-column justify-content-center">
            <blockquote class="blockquote my-5">
                <h3 class="my-4">El cambio siempre supone resistencia, porque establecer un nuevo hábito supone un
                    esfuerzo y todo nuestro ser nos pide, aunque nos estemos comportando de forma perjudicial para
                    nosotros mismos, seguir actuando como lo veníamos haciendo</h3>
                <footer class="blockquote-footer">
                    <cite title="Source Title"> </cite>
                </footer>
            </blockquote>
            <GroupButtons :infoBotones="botones" />
        </div>
    </section>
</template>

<style>
.img-vertical {
    display: none;
}

.img-horizontal {
    display: block;
}

@media (orientation: landscape) {
    .img-vertical {
        display: block;
    }

    .img-horizontal {
        display: none;
    }
}
</style>