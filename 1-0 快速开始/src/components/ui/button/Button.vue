<script setup lang="ts">
import { useAttrs } from 'vue'
import { buttonVariants, type ButtonVariants } from './buttonVariants'
import { cn } from '@/lib/utils'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const attrs = useAttrs()
</script>

<template>
  <button v-bind="attrs" :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </button>
</template>
