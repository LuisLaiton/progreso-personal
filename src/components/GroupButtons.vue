<script setup>
defineProps(["infoBotones", "infoRouter"])
</script>

<template>
    <div class="btn-group-vertical mx-3" role="group" v-if="infoRouter != 'false'">
        <RouterLink v-for="item in infoRouter" :to="item.url" type="button" class="btn" :class="item.style">
            {{ item.text }}
        </RouterLink>
    </div>
    <div class="btn-group-vertical mx-3" role="group" v-if="infoBotones != 'false'">
        <button v-for="item in infoBotones" type="button" class="btn" :class="item.style">
            {{ item.text }}
        </button>
    </div>
</template>