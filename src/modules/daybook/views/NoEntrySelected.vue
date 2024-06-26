<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <FabButton />
</template>

<script>
import FabButton from '@/modules/daybook/components/FabButton.vue'

export default {
  components: {
    FabButton
  }
}
</script>

<style scoped>
div {
  height: 100%;
}
</style>
