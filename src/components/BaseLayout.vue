<template>
  <base-header />
  <slot />
  <base-footer />
</template>

<script>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseFooter,
    BaseHeader
  }
}
</script>