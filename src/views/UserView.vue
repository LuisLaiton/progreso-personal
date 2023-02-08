<script setup>
import { ref } from 'vue'
import {RouterLink} from 'vue-router'
import FormAccess from '@/components/FormAccess.vue';

const options = [{
    enlace: 'frases',
    text: 'Agregar frase'
}, {
    enlace: 'historial',
    text: 'Historial'
}, {
    enlace: 'cambiarInfo',
    text: 'Cambiar informacion'
}, {
    enlace: '',
    text: 'Cerrar sesión'
}]

const proPhraseList = ref([
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
])

let credentials = {
    name: "Luis Felipe Laiton Cortes",
    user: "LuisFLaiton",
    password: "LuisFLaiton",
    dateBirth: "2000-06-28",
    gender: "Masculino"
}

let autor = ref(''), frase = ref(''), show = ref(0), nuevaInfo = ref(false)

const eliminar = (index) => proPhraseList.value.splice(index, 1)
const editar = (index) => {
    autor.value = proPhraseList.value[index].author
    frase.value = proPhraseList.value[index].text
    eliminar(index)
}
const guardar = () => {
    proPhraseList.value.push({
        author: autor.value,
        text: frase.value
    })
    autor.value = frase.value = ''
}

let pestaña = (num) => {
    show.value = num
}
const cambiarInformacion = (info) => {
    if (info.user == credentials.user && info.password == credentials.password){
        nuevaInfo.value = true
    }
}

const guardarInfoUsuario = (info) => {
    console.log(info)
    credentials = info
    nuevaInfo.value = false
    show.value = 0
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

            <p to="/home" class="navbar-brand" href="#">Usuario</p>
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(item, index) in options" :key="index">
                        <p class="nav-link" @click="pestaña(index)">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <RouterLink to="/home" class="text-warning text-decoration-none">Volver</RouterLink>
        </div>
    </nav>
    <div class="container">
        <!-- Frases -->
        <div class="my-3" v-show="show == 0">
            <h3 id="frases">Frases</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <!-- Nueva Frase -->
                <div class="col" id="nuevaFrase">
                    <div class="card h-100">
                        <div class="card-header d-flex justify-content-between">
                            <h5 class="mt-2">Nueva frase</h5>
                            <button class="btn btn-link text-primary" @click="guardar">Guardar</button>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Autor</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Hola"
                                    v-model="autor">
                                <div class="form-text">En caso de no conocerlo se deja en blanco</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Frase</label>
                                <textarea class="form-control" aria-label="With textarea" v-model="frase"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" v-for="(item, index) in proPhraseList" :key="index">
                    <div class="card h-100">
                        <div class="card-header d-flex justify-content-between">
                            <a class="btn btn-link text-success" href="#nuevaFrase" @click="editar(index)">Editar</a>
                            <button class="btn btn-link text-danger" @click="eliminar(index)">Eliminar</button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.text }}</h5>
                            <p class="card-text">{{ item.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Historial -->
        <div class="mt-3" v-show="show == 1">
            <h3>Historial</h3>
        </div>
        <!-- Cambiar informacion -->
        <div class="mt-3" v-show="show == 2">
            <FormAccess v-if="!nuevaInfo" titulo="Datos actuales" typeForm="login" :user="credentials" @evento="cambiarInformacion"/>
            <FormAccess v-if="nuevaInfo" titulo="Actualizar informacion" typeForm="registro" :user="credentials" @evento="guardarInfoUsuario" />
        </div>
    </div>
</template>

<style>
#a {
    height: 100%;
}
</style>