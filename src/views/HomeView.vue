<template>
  <h1>Home View</h1>
  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" class="btn btn-success">Success</button>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>

<style></style>
