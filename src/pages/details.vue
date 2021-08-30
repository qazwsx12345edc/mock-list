<template>
  <div>
    <div>details</div>
    <div>{{ "这是第" + value + "条数据的详情" }}</div>
    <div><button @click="onClickMoveBack()">click to move back</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },

  mounted() {
    this.value = this.$route.params.value;
  },

  methods: {
    onClickMoveBack() {
      this.$router.go('-1');
    },
  },
};
</script>
