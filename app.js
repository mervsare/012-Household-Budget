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
let expense = [];
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
    incomesSpan.textContent = total;
  }
};

const addExpense = () => {
  const tr = document.createElement("tr");
  document.getElementById("expense-list").before(tr);
  expense[0] = expensesDateInput.value;
  expense[1] = expensesInput.value;
  expense[2] = expensesAmountInput.value;
  expense[3] = url("");
  let rowExpense = expense.map((i) => {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = i;
    tr.style.alignItems;
  });
};
