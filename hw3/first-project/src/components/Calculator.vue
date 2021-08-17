<template>
  <div class="calc">
    {{ message }}
    <div>
      <input type="number" placeholder="Operand1" v-model.number="operand1" />
      <div>
        <button
          v-for="operation in operations"
          :key="operation"
          @click="calculate(operation)"
          :title="operation"
        >
          {{ operation }}
        </button>
      </div>
      <input type="number" placeholder="Operand2" v-model.number="operand2" />
      <div>result = {{ result }}</div>
      <div v-if="!!error">
        Ошибка:
        {{ error }}
      </div>
      <div class="keyboard">
        <input type="checkbox" id="check" v-model="showKeyboard" />
        <label for="check">show keyboard</label>
        <div class="keys" v-if="showKeyboard">
          <button
            v-for="keyb in keyboard"
            :key="keyb"
            @click="typing(keyb)"
            :title="keyb"
          >
            {{ keyb }}
          </button>
          <div class="radio">
            <input
              type="radio"
              id="firstOp"
              value="one"
              v-model="pickedOperand"
            />
            <label for="firstOp">First Number</label>
            <input
              type="radio"
              id="secondOp"
              value="two"
              v-model="pickedOperand"
            />
            <label for="secondOp">Second Number</label>
            <br />
          </div>
        </div>
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
    showKeyboard: "",
    pickedOperand: "",
    result: 0,
    error: "",
    operations: ["+", "-", "*", "/", "^", "//"],
    keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Backspace"],
    tempOperand1: [],
    tempOperand2: [],
  }),
  methods: {
    typing(key) {
      if (this.pickedOperand === "one") {
        if (key == "Backspace") {
          this.tempOperand1.pop();
        } else {
          this.tempOperand1.push(key);
        }
        this.operand1 = +this.tempOperand1.join("");
      } else if (this.pickedOperand === "two") {
        if (key == "Backspace") {
          this.tempOperand2.pop();
        } else {
          this.tempOperand2.push(key);
        }
        this.operand2 = +this.tempOperand2.join("");
      }
    },
    calculate(operation = "+") {
      // const { operand1, operand2, result } = this;
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
