<script setup>
import FormAccess from '@/components/FormAccess.vue'

const botones = [
    {
        text: "Guardar",
        url: "/login",
        style: "btn-info"
    }
]
</script>

<template>
    <FormAccess titulo="Registro" loginDisabled="true" :btns="botones"/>
</template>
