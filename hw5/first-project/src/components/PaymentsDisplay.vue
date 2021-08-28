<template>
  <div class="list">
    <table class="item" v-for="(item, idx) in list" :key="idx">
      <tr>
        <td class="row">{{ item.id }}</td>
        <td class="row">{{ item.date }}</td>
        <td class="row">{{ item.category }}</td>
        <td class="row">{{ item.value }}</td>
      </tr>
      <!-- {{ idx + 1 }} - {{ item }} -->
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: { type: Array, default: () => [] },
  },
};
</script>

<style>
.row {
  padding-left: 50px;
  text-align: center;
}
</style>