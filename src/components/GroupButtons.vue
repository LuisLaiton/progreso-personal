<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

defineProps(["infoBotones"])

const enlace = (ruta) => {
    router.push(ruta)
}
</script>

<template>
    <div class="btn-group-vertical mx-3" role="group">
        <button v-for="item in infoBotones" @click="enlace(item.url)" type="button" class="btn" :class="item.style">
            {{ item.text }}
        </button>
    </div>
</template>