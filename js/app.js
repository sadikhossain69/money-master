
function isUpdate(event1, event2) {
  const allID = document.getElementById(event1 + event2);
  return allID;
}

// calculate button handle
document
  .getElementById("calculator-btn")
  .addEventListener("click", function () {
    // total expenses handle
    const foodValue = isUpdate("food", "-input").value;
    const rentValue = isUpdate("rent", "-input").value;
    const clothesValue = isUpdate("clothes", "-input").value;
    const totalExpensesAmount =
      parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    const totalExpenses = isUpdate("expenses", "-total");
    totalExpenses.innerText = totalExpensesAmount;
    const incomeValue = isUpdate("income", "-input").value;
    const totalBalance = parseFloat(incomeValue) - totalExpensesAmount;
    const balance = isUpdate("balance", "-total");
    balance.innerText = totalBalance;
  });
