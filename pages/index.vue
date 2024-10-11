<script lang="ts" setup>
useSeoMeta({
  title: 'Шадр!',
  description: 'Шадр. Сайт о достопримечательностях Шадринска',
});
</script>

<template>
  <div>
    <h1>Шадринск!</h1>
    <NuxtLink class="page-link" to="/">Главная</NuxtLink>
    <NuxtLink class="page-link" to="/history">История</NuxtLink>
    <NuxtLink class="page-link" to="/gallery">Фотогалерея</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.page-link {
  display: block;
  color: $color-2;
}
</style>
