<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const back = () => {
    router.push('/')
}
</script>

<template>
    <div class="text-center my-5">
    <h1 class="text-danger fw-bold display-1">404</h1>
    <button @click="back" class="btn btn-outline-danger">Volver al inicio</button>
    </div>
</template>