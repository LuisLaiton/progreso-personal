<script setup>
import HeaderTitle from './components/HeaderTitle.vue';
import AsideLeft from './components/AsideLeft.vue';
import MainBody from './components/MainBody.vue';
import FooterInfo from './components/FooterInfo.vue';
</script>

<template>
  <HeaderTitle />

  <body class="row fondo">
    <AsideLeft />
    <MainBody />
  </body>
  <FooterInfo />
</template>