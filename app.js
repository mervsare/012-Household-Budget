//* ------ Selectors ------- */
const incomeInput = document.getElementById("income-input");

//* ------- Variables ------- */
const incomesSpan = document.getElementById("incomes");
const incomeButton = document.getElementById("income-btn");
let income = [];

//* ------- Event Listeners ------- */
incomeButton.addEventListener("click", () => {
  income.push(incomeInput.value);
  addIncome();
});
//* ------- Functions ------- */
const addIncome = () => {
  let total = income.reduce((a, b) => a + b);
  incomesSpan.textContent = total;
};
