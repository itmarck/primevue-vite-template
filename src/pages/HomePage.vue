<template>
  <div class="p-text-center p-p-4">
    <h1>primevue-vite-template</h1>
    <p>Setup template for Prime Vue with Vite</p>
    <Button label="GitHub" class="p-m-2" icon="pi pi-star" @click="onClick" />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const url = 'https://github.com/itmarck/primevue-vite-template'

      function onClick() {
        window.open(url)
      }

      return { onClick }
    },
  })
</script>
