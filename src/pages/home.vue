<template>
  <div>
    <button @click="onClickMoveToSearch()">click to search</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "home",
  methods: {
    onClickMoveToSearch() {
      this.$router.push("/list");
      this.setKeepAlive(["list"])
    },

    ...mapMutations(["setKeepAlive"])
  },

};
</script>

<style>
</style>