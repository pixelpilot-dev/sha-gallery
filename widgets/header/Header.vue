<script lang="ts" setup>
  const classList = ref('header');
</script>

<template>
  <header
    :class="classList"
  >
    Header
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: rem(100);
  padding: rem(10) 0;
  font-size: rem(40);
  color: $color-3-2;
}
</style>