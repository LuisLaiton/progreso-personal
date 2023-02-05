<script setup>
import FormAccess from '@/components/FormAccess.vue'

const botones = [
    {
        text: "Ingresar",
        url: "/home",
        style: "btn-info"
    },
    {
        text: "Registrate",
        url: "/registro",
        style: "btn-outline-info"
    }
]

const credentials = {
    name: "Luis Felipe Laiton Cortes",
    user: "LuisFLaiton",
    password: "LuisFLaiton",
    dateBirth: "28/06/2000",
    gender: "Masculino"
}
let comprovation = false
const infoForm = (user, password) => {
    comprovation = (user == credentials.user) ? (password == credentials.password) ? true : false : false
}

</script>

<template>
    <FormAccess titulo="Login" typeForm="login" :btns="botones" />
</template>
