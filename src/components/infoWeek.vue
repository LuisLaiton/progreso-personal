<template>
    <!-- Agregar metas -->
    <div class="row">
        <p class="col-2 col-mg-1">
            <a data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false"
                aria-controls="multiCollapseExample1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
            </a>
        </p>
        <div class="collapse col multi-collapse" id="multiCollapseExample1">
            <div class="card card-body text-start lh-1">
                <h5>Meta</h5>
                <p>En este campo se ingresa la meta a cumplir en la semana</p>
                <h5>Cantidad</h5>
                <p>Es la cantidad minima de veces que se relizara la meta en la semana, desde 1 hasta 7 veceses
                </p>
                <h5>Botones</h5>
                <p>
                    <strong>Nuevo: </strong>Guarda la meta actual y limpia los campos para agregar una nueva
                    <br>
                    <strong>Editar: </strong>Es la lista de todas las metas registradas, al seleccionar una se podra
                    editar
                </p>
            </div>
        </div>
    </div>
</template>