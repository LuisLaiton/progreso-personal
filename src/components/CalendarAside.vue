<script setup>
// Establecer la fecha actual
let today = new Date(),             // Fecha de hoy
    year = today.getFullYear(),     // Año
    month = today.getMonth(),       // Mes (inicia en 0)
    daysMonth = new Date(year, month + 1, 0).getDate() + 1 // Cantidad de dias en el mes, mas uno para facilitar el procedimiento

let daysWeek = [[]], // Matriz donde se agregaran los dias ordenados
    nameDays = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'] // Abreviaturas de los dias de la semana

let firstDay = new Date(year, month, 0).getDay() // Retorna la ubicacion del primer dia del mes

// Crear matriz con los dias ordenados
let week = [], num = 1
for (let day = 1; day <= (daysMonth + firstDay); day++) {
    if (day <= firstDay) week.push('') // si el dia es menor o igual al primer dia del mes se agrega una cadena vacia
    else {
        week.push(num)
        num++
    }
    let ultimo = (daysMonth == num) ? true : false // verifica si es el ultimo dia del mes
    if ((day % 7 == 0 && day != 0) || ultimo) { // si completa la semana o es el ultimo dia del mes
        daysWeek.push(week) // agrega la semana a la matriz de dias ordenados
        week = [] // vacia la matriz de
    }
}

// Le asigna el nombre del mes para mostrarlo en pantalla
let Mes = ''
switch (month) {
    case 0:
        Mes = 'Enero'
        break;
    case 1:
        Mes = 'Febrero'
        break;
    case 2:
        Mes = 'Marzo'
        break;
    case 3:
        Mes = 'Abril'
        break;
    case 4:
        Mes = 'Mayo'
        break;
    case 5:
        Mes = 'Junio'
        break;
    case 6:
        Mes = 'Julio'
        break;
    case 7:
        Mes = 'Agosto'
        break;
    case 8:
        Mes = 'Septiembre'
        break;
    case 9:
        Mes = 'Octubre'
        break;
    case 10:
        Mes = 'Noviembre'
        break;
    case 11:
        Mes = 'Diciembre'
        break;

    default:
        Mes = 'Error'
        break;
}
</script>

<template>
    <div class="display-celular">
        <h2>Calendario</h2>
        <table class="table caption-top text-bg-dark">
            <caption class="text-white">{{ Mes }}</caption> <!--Muestra el nombre del mes actual-->
            <tr>
                <th v-for="name in nameDays">{{ name }}</th> <!--Muestra los días de la semana en abreviatura-->
            </tr>
            <tr v-for="row in daysWeek">
                <td v-for="col in row"> {{ col }}</td> <!--Muestra los días del mes en una tabla -->
            </tr>
        </table>
    </div>
</template>