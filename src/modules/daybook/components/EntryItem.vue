<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry-view', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nulla recusandae,
      architecto maxime, soluta expedita aliquam reprehenderit adipisci dolore excepturi odit,
      voluptates non numquam aperiam natus. Possimus placeat consectetur nihil.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
}

.entry-container:hover {
  background-color: #ececec;
}

.entry-description {
  font-size: 12px;
}
</style>
