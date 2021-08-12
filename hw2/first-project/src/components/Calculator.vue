<template>
  <div class="calc">
    {{ message }}
    <div>
      <input type="number" placeholder="Operand1" v-model.number="operand1" />
      <div>
        <button @click="calculate('+')">+</button>
        <button @click="calculate('-')">-</button>
        <button @click="calculate('*')">*</button>
        <button @click="calculate('/')">/</button>
        <button @click="calculate('^')">^</button>
        <button @click="calculate('//')">//</button>
      </div>
      <input type="number" placeholder="Operand2" v-model.number="operand2" />
      <div>= {{ result }}</div>
      <div v-if="!!error">
        Ошибка:
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Enter two numbers",
    operand1: 0,
    operand2: 0,
    result: 0,
    error: "",
  }),
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.mult();
          break;
        case "/":
          this.div();
          break;
        case "^":
          this.exp();
          break;
        case "//":
          this.intDiv();
          break;

        default:
          break;
      }
    },

    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя";
      } else {
        this.result = operand1 / operand2;
      }
    },
    exp() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    intDiv() {
      if (this.operand2 === 0) {
        this.error = "На 0 делить нельзя";
      } else {
        this.result = Math.floor(this.operand1 / this.operand2);
      }
    },
  },
};
</script>
