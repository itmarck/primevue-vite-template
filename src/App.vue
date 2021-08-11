<template>
  <component :is="layout" class="p-component">
    <router-view />
  </component>
</template>

<script>
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  export default defineComponent({
    components: {
      DefaultLayout,
    },

    setup() {
      const layout = computed(() => {
        const name = useRoute().meta?.layout || 'default'
        return `${name}-layout`
      })

      return { layout }
    },
  })
</script>
