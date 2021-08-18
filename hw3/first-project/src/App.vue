<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My Personal Costs</div>
      </header>
      <div :class="[$style.content]">
        <payments-display :list="paymentList" />
      </div>
      <div :class="[$style.content]" v-if="showForm">
        <add-payment-form @addNewPayment="addData" />
      </div>
      <div :class="[$style.content]">
        <button @click="showForm = !showForm">ADD NEW COST +</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: { PaymentsDisplay, AddPaymentForm },
  data() {
    return {
      paymentList: [],
      showForm: false,
    };
  },
  methods: {
    addData(newPayment) {
      this.paymentList.push(newPayment);
    },
    fetchData() {
      return [
        {
          date: "01.01.2021",
          category: "Food",
          value: 178,
        },
        {
          date: "02.01.2021",
          category: "Transport",
          value: 320,
        },
        {
          date: "03.01.2021",
          category: "Food",
          value: 530,
        },
      ];
    },
  },
  created() {
    this.paymentList = this.fetchData();
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: block;
  height: 100%;
}
.title {
  font-size: 30px;
}
.content {
  padding-top: 30px;
}
</style>
