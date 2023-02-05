<script setup>
defineProps(['text', 'btnColor', 'enlace'])
</script>

<template>
    <button type="button" class="btn" :class="btnColor">
        <a href="enlace" class="text-reset text-decoration-none">
            {{ text }}
        </a>
    </button>
</template>