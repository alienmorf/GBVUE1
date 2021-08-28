<template>
  <div class="pagination-wrap">
    <div @click="onClick(cur - 1)">-</div>
    <div class="page" v-for="page in amount" :key="page" @click="onClick(page)">
      {{ page }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: {
      type: Number,
      default: 5,
    },
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.amount) {
        return;
      }
      this.$emit("changePage", page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination-wrap {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      color: red;
    }
  }
}
</style>