//* ------ Selectors ------- */
const incomeInput = document.getElementById("income-input");

//* ------- Variables ------- */
const incomesSpan = document.getElementById("incomes");
const incomeButton = document.getElementById("income-btn");
const expensesInput = document.getElementById("expenses");
const expensesDateInput = document.getElementById("date");
const expensesAmountInput = document.getElementById("amount");
const saveButton = document.getElementById("save-btn");

let income = [];

//* ------- Event Listeners ------- */
incomeButton.addEventListener("click", () => {
  income.push(Number(incomeInput.value));
  addIncome();
});
saveButton.addEventListener("click", () => {
  addExpense();
});

//* ------- Functions ------- */
const addIncome = () => {
  if (incomeInput != "") {
    let total = income.reduce((a, b) => a + b);
    incomeInput.value = "";
    incomesSpan.textContent = total;
  }
};
const addExpense = () => {
  if (
    expensesInput != "" &&
    expensesDateInput != "" &&
    expensesDateInput != ""
  ) {
    expense = [
      expensesDateInput.value,
      expensesInput.value,
      expensesAmountInput.value,
    ];
    for (i in expense) {
      let expenseFor = document.createElement("td");
      td.textContent = i;
      document.getElementById("expense-list").appendChild;
    }
  }
};
