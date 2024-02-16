<template>
    <div>
        <base-header />
        <slot />
        <base-footer />
    </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseFooter,
    BaseHeader,
  }
}
</script>