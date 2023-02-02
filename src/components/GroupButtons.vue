<script setup>
defineProps(["infoBotones"])
</script>

<template>
    <div class="btn-group-vertical mx-3" role="group">
        <RouterLink v-for="item in infoBotones" :to="item.url" type="button" class="btn" :class="item.style">
            {{ item.text }}
        </RouterLink>
    </div>
</template>