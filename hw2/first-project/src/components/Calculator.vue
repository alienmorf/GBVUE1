<template>
  <div class="calc">
    {{ message }}
    <div>
      <input
        type="number"
        placeholder="Operand1"
        v-on:focus="onFocus"
        v-model.number="operand1"
      />
      <div>
        <button @click="result = operand1 + operand2">+</button>
        <button @click="dif">-</button>
        <button @click="result = operand1 * operand2">*</button>
        <button @click="div(operand1, operand2)">/</button>
        <button @click="multi(operand1, operand2)">^</button>
        <button @click="divf(operand1, operand2)">//</button>
      </div>
      <input
        type="number"
        placeholder="Operand2"
        @:keyup="onKeyUp"
        v-model.number="operand2"
      />
      <div>= {{ result }}</div>
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
  }),
  methods: {
    doThan(text, event) {
      console.log(text, event);
    },
    dif() {
      this.result = this.operand1 - this.operand2;
    },
    multi(op1, op2) {
      this.result = Math.pow(op1, op2);
    },
    div(op1, op2) {
      this.result = op1 / op2;
    },
    divf(op1, op2) {
      this.result = Math.floor(op1 / op2);
    },
    onFocus() {
      console.log("onFocus");
    },
    onKeyUp() {
      console.log("onKeyUp");
    },
  },
};
</script>
