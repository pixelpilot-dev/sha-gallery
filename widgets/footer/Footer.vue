<script lang="ts" setup>
  const classList = ref('footer');
</script>

<template>
  <footer
    :class="classList"
  >
    Footer
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: rem(100);
  padding: rem(10) 0;
  font-size: rem(40);
  color: $color-2-1;
}
</style>