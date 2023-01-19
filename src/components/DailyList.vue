<script setup>
defineProps({
    arrayGoals: {
        type: Array,
        default: ["Sin más metas por hoy"], // El valor predeterminado del array de metas diarias
    },
    checkShow: {
        type: Boolean,
        default: false, // El valor predeterminado de checkShow es false
    },
})

</script>

<template>
    <form action="" class="container">
        <div v-for="(meta, index) in arrayGoals" :key="index">
            <!-- Itera sobre el array de metas diarias y las muestra como una lista -->
            <input v-show="checkShow" type="checkbox" :name="index" :id="index">
            <!-- muestra un checkbox si checkShow es true -->
            <label class="ps-4">
                {{ meta }} <!-- Muestra cada meta diaria -->
            </label>
        </div>
    </form>
</template>
