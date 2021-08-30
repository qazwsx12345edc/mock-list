<template>
  <div>
    <button @click="onClickMoveToSearch()">click to search</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickMoveToSearch() {
      this.$router.push("/list");
    },
  },

};
</script>

<style>
</style>