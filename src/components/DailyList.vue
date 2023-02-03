<script setup>
defineProps({
    arrayGoals: {
        type: Array,
        default: ["Sin más metas por hoy"], // El valor predeterminado del array de metas diarias
    }
})
const emit = defineEmits(['evento'])
</script>

<template>
    <div class="form-check form-switch" v-for="(meta, index) in arrayGoals" :key="index">
        <input class="form-check-input" type="checkbox" :checked="!meta.pend" :disabled="!meta.pend" @click="emit('evento', index)">
        <label class="form-check-label" for="flexSwitchCheckDefault">{{ meta.title }}</label>
    </div>
</template>
