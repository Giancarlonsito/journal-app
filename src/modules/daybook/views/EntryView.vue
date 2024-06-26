<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-2 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2024, Jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-5">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>

  <FabButton icon="fa-save" />

  <img src="@\assets\imaginedragons.png" alt="entry image" class="img-thumbnail" />
</template>

<script>
import FabButton from '../components/FabButton.vue'

export default {
  components: {
    FabButton
  }
}
</script>

<style scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
}
textarea:focus {
  outline: none;
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 20px #0008;
}
</style>
