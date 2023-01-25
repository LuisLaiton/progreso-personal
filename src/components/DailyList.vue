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
    <form action="" class="container">
        <div v-for="(meta, index) in arrayGoals" :key="index" @click="emit('evento', index)">
            <!-- Itera sobre el array de metas diarias y las muestra como una lista -->
            <input v-show="meta.pend" type="checkbox" :name="index" :id="index">
            <!-- muestra un checkbox si la meta esta pendiente -->
            <label class="ps-4"> <!-- Muestra cada meta diaria -->
                <span class="text-secondary"  v-show="!meta.pend">{{ meta.title }}</span>
                <span v-show="meta.pend">{{ meta.title }}</span>
            </label>
        </div>
    </form>
</template>
