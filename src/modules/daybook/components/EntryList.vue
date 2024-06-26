<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>

    <div class="entry-scrollarea">
      <EntryItem v-for="item in 100" :key="item">Entry</EntryItem>
    </div>
  </div>
</template>

<script>
import EntryItem from './EntryItem.vue'

export default {
  components: {
    EntryItem
  }
}
</script>

<style scoped>
.entry-list-container {
  border-right: 1px solid #123e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: hidden;
  overflow-y: scroll;
}
</style>
