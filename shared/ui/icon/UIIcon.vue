<script setup lang="ts">
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'custom';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const classList = computed(() => {
  const baseClass = 'icon';
  if (props.size) {
    return {
      [`${baseClass}_size_${props.size}`]: props.size,
    };
  }
});
</script>

<template>
  <SvgIcon
    :name="String(name)"
    class="icon"
    :class="[classList]"
  />
</template>

<style lang="scss" scoped>
  .icon {
    display: inline-block;

    &_size_sm {
      width: rem(16);
      height: rem(16);
    }

    &_size_md {
      width: rem(64);
      height: rem(64);
    }

    &_size_lg {
      width: rem(72);
      height: rem(72);
    }
  }
</style>