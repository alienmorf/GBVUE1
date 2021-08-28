<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My Personal Costs</div>
      </header>
      <div :class="[$style.content]">
        total Value: {{ getFPV }}
        <payments-display :list="currentEl" />
        <pagination
          :cur="cur"
          :n="n"
          :length="paymentsList.length"
          @changePage="onChangePage"
        />
      </div>
      <div :class="[$style.content]" v-if="showForm">
        <add-payment-form @addNewPayment="addData" />
      </div>
      <div :class="[$style.addButton]">
        <button @click="showForm = !showForm">ADD NEW COST +</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      // paymentList: [],
      showForm: false,
      cur: 1,
      n: 5,
    };
  },
  methods: {
    ...mapMutations({
      loadData: "setPaymentListData",
      addDataToStore: "addDataPaymentList",
    }),
    ...mapActions({ fetchListData: "fetchData" }),
    addData(newPayment) {
      // this.paymentList.push(newPayment);
      this.addDataToStore(newPayment);
    },
    onChangePage(page) {
      this.cur = page;
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
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentEl() {
      const { n, cur } = this;
      return this.paymentsList.slice(n * (cur - 1), n * (cur - 1) + n);
    },
  },
  created() {
    // this.paymentList = this.fetchData();
    // this.$store.commit("setPaymentListData", this.fetchData());
    // this.setPaymentListData(this.fetchData()); // с импортом мутаций
    // this.loadData(this.fetchData()); // с присваиванием своего имени мутации
    // this.$store.dispatch("fetchData");
    this.fetchListData();
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
.addButton {
  padding-top: 30px;
}
.row {
  font-size: 30px;
}
</style>
