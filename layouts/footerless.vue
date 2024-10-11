<script setup lang="ts">

</script>

<template>
  <div class="page">
    <Header />

    <main class="page__content">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100dvh;

  &__content {
    width: 100%;
    flex-grow: 1;
  }
}
</style>