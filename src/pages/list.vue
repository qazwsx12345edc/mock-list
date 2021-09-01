<template>
  <div>
    <div class="list-btn">
      <button @click="onClickMoveToHome()">back to home</button>
    </div>
    <input
      type="text"
      autofocus
      placeholder="输入要搜索的内容"
      v-model="searchValue"
      @keydown.enter="onKeyDownSearch()"
    />
    <div v-for="item in list" :key="item.id">
      <div @click="onClickShowDetails(item)" class="list-item">
        {{ item.id }}: {{ "我是第" + item.id + "条数据" }}
        <br>
        {{item.email}}
        <br>
        {{item.date}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "list",
  data() {
    return {
      list: [],
      searchValue: "",
      target: null,
    };
  },

  methods: {
    onKeyDownSearch() {
      let reqData = {
        params: this.searchValue,
      };
      if (this.searchValue != "") {
        this.$get("/search", reqData).then((res) => {
          this.list = res;
          this.searchValue = "";
        });
      }
    },
    onClickShowDetails(item, event) {
      event = event || window.event;
      this.$router.push({ name: "details", params: { value: item.id } });
      event.target.style.backgroundColor = "#bfa";
      if (this.target) {
        this.target.style.backgroundColor = "#fff";
      }
      this.target = event.target;
    },
    onClickMoveToHome() {
      this.$router.push("/home");
    },

    ...mapMutations(["setKeepAlive"])
  },

  beforeRouteLeave(to, from, next) {
    console.log(from.path + " => " + to.path);
    if (to.path === "/details") {
      this.setKeepAlive(["list"])
    } else {
      this.setKeepAlive("[]")
    }
    next();
  },

};
</script>

<style scoped>
.list-item {
  line-height: 2;
}

.list-item:hover {
  background-color: #ff6700;
  cursor: pointer;
}

.list-btn {
  height: 50px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>