(function initApp() {
  let user_input = "";
  let user_input_values = [];
  let last_result_value = 0;
  let operationsPad = document.getElementById("operations");
  let resultsPad = document.getElementById("results");

  const number_codes = [
    [48, "0"],
    [49, "1"],
    [50, "2"],
    [51, "3"],
    [52, "4"],
    [53, "5"],
    [54, "6"],
    [55, "7"],
    [56, "8"],
    [57, "9"],
    [46, "."],
    [45, "-"],
    [43, "+"],
    [47, "/"],
    [42, "*"],
    [61, "="],
    [13, "="],
    [8, "clr"],
  ];
  document.addEventListener("keypress", (e) =>
    processUserInput(getKeycodeValue(e.keyCode))
  );
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) processUserInput(getKeycodeValue(e.keyCode));
  });

  let calculator_buttons = document.querySelectorAll(".row > div");
  for (btn of calculator_buttons) {
    btn.addEventListener("click", (e) =>
      processUserInput(onClickCalculatorButton(e))
    );
  }

  function onClickCalculatorButton(e) {
    return e.target.getAttribute("data-value");
  }

  function getKeycodeValue(keycode) {
    let available = number_codes.filter((current) => current[0] === keycode);
    if (available.length > 0) return available[0][1];
    return "";
  }
  function clearState() {
    user_input = "";
    user_input_values = [];
    last_result_value = 0;
    updateCalculatorPad();
  }

  function processUserInput(input = "") {
    input = input.trim();
    if (input === "") {
      return;
    }
    if (!input.match(/[0-9.]/)) {
      if (input === "clr") clearState();
      else updateUserInput(input, true);
    } else updateUserInput(input, false);
  }

  function computeValues() {
    const [operand1, operator, operand2] = user_input_values;
    let result = 0;
    let operand1Int = parseFloat(operand1),
      operand2Int = parseFloat(operand2);
    switch (operator) {
      case "*":
        result = operand1Int * operand2Int;
        break;
      case "/":
        if (operand2Int === 0) result = 0;
        else result = operand1Int / operand2Int;
        break;
      case "-":
        result = operand1Int - operand2Int;
        break;
      case "+":
        result = operand1Int + operand2Int;
        break;
      default:
        break;
    }
    let string_value = "";
    if (!parseInt(result.toFixed(2).toString().split(".")[1]) === 0)
      string_value = result.toFixed(2).toString();
    else string_value = result.toString();
    clearState();
    last_result_value = string_value;
    updateUserInput("=", true);
  }

  function updateUserInput(input, isOperator) {
    switch (user_input_values.length) {
      case 0:
        if (input === ".") input = "0.";
        if (isOperator && last_result_value !== 0) {
          if (input !== "=") {
            user_input = `${last_result_value} ${input}`;
            user_input_values = [last_result_value, input];
          }
          break;
        }
        if (!isOperator || (isOperator && (input === "-" || input === "+"))) {
          user_input = input;
          user_input_values = [input];
        }
        break;
      case 1:
        if (isOperator) {
          user_input += " " + input;
          user_input_values = [...user_input_values, input];
        } else {
          user_input += input;
          const first = user_input_values[0];
          user_input_values = [first + input];
        }
        break;
      case 2:
        if (!isOperator || (isOperator && (input === "-" || input === "+"))) {
          user_input += " " + input;
          user_input_values = [...user_input_values, input];
        }
        break;
      case 3:
        if (!isOperator) {
          user_input += input;
          let values_reversed = user_input_values.map((el) => el).reverse();
          const [last, ...values] = values_reversed;
          user_input_values = [...values.reverse(), last + input];
        } else {
          computeValues();
          if (input !== "=") updateUserInput(input, true);
        }
        break;
      default:
        break;
    }
    updateCalculatorPad();
  }

  function updateCalculatorPad() {
    operationsPad.innerHTML = user_input;
    resultsPad.innerHTML = last_result_value;
  }
})();
