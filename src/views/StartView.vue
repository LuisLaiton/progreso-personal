<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container m-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/683/683646.png" class="img-fluid rounded-start"
                    alt="...">
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="ms-5">
                    <h3 class="card-title">Se un poco mejor cada día</h3>
                    <div class="btn-group mt-5">
                        <RouterLink to="/login" class="btn btn-primary">Iniciar sesión</RouterLink>
                        <RouterLink to="/registro" class="btn btn-outline-primary">Registrate</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>