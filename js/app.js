
function isUpdate(event1, event2) {
  const allID = document.getElementById(event1 + event2);
  return allID;
}

// function errorFunction() {
//   const foodCost = isUpdate('food', '-input').value
//   const foodMoney = parseFloat(foodCost)
//   const incomeCost = document.getElementById('income-input').value
//   if(foodMoney < 0 ) {
//     alert('d')
//   }
// }


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

    // balance handle
    const incomeValue = isUpdate("income", "-input").value;
    const totalBalance = parseFloat(incomeValue) - totalExpensesAmount;
    const balance = isUpdate("balance", "-total");
    balance.innerText = totalBalance;
  });

  // save button handle 
  document.getElementById('save-btn').addEventListener('click', function () {
      // saving amount handle
      const saveInput = isUpdate('save', '-input').value;
      const incomeValue = isUpdate("income", "-input").value;
      const savingRule = (parseFloat(incomeValue) * parseFloat(saveInput)) / 100;
      let savingAmount = isUpdate('saving', '-amount')
      let savingAmountTotal = savingAmount
      savingAmountTotal.innerText = savingRule;

      // remaining balance handle
      const balance = isUpdate("balance", "-total");
      const remainingBalance = isUpdate('remaining', '-balance')
      remainingBalance.innerText = balance.innerText - savingAmount.innerText
  })
