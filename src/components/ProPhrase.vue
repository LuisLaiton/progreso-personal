<script setup>
defineProps(['proPhrase'])
</script>

<template>
    <article class="my-4 container">
        <div class="card text-center">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{{ proPhrase.text }}</p>
                    <footer class="blockquote-footer">
                        <cite title="Source Title">{{ proPhrase.author }}</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    </article>
</template>