<script setup>
defineProps({
    arrayGoals: {
        type: Array,
        default: ["Sin más metas por hoy"],
    },
    checkShow: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
    <form action="" class="container">
        <div v-for="(meta, index) in arrayGoals" :key="index">
            <input v-show="checkShow" type="checkbox" :name="index" :id="index">
            <label class="ps-4">
                {{ meta }}
            </label>
        </div>
    </form>
</template>