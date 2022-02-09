<template>
  <div>
    <input type="text" v-model="date" placeholder="date" />
    <input type="number" v-model.number="value" placeholder="value" />
    <select v-model="category" v-if="options">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <!-- <input type="text" v-model="category" placeholder="category" /> -->
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPaymentForm",
  data() {
    return {
      id: "",
      value: "",
      category: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategories;
    },
  },

  methods: {
    ...mapActions(["fetchCategoryList"]),
    onSave() {
      const data = {
        
        date: this.date || this.getCurrentDate,
        value: +this.value,
        category: this.category,
        id: this.paymentsList.length,
      };
      this.$emit("addNewPayment", data);
    },
  },
  created() {
    this.fetchCategoryList();
  },
};
</script>

<style>
</style>