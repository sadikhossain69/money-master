// ID calling function
function isUpdate(event1, event2) {
  const allID = document.getElementById(event1 + event2);
  return allID;
}

// error handling calculate
function errorCalculateFunction() {

  // income input
  const incomeInput = isUpdate('income', '-input').value
  const incomeValue = parseFloat(incomeInput)

  // food input
  const foodInput = isUpdate('food', '-input').value
  const foodValue = parseFloat(foodInput)

  // rent input
  const rentInput = isUpdate('rent', '-input').value
  const rentValue = parseFloat(rentInput)

  // clothes input 
  const clothesInput = isUpdate('clothes', '-input').value
  const clothesValue = parseFloat(clothesInput)

  // expenses total 
  let expensesTotal = isUpdate('expenses', '-total').innerText
  const expensesValue = parseFloat(expensesTotal)
  expensesTotal.innerText = expensesValue

  // error condition
  if(isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue) ) {
    alert('Please enter somethings in the input')
  }
  else if ( expensesTotal > incomeValue) {
    alert('You do not have too money to spend') 
  }
}

// error handle save
function errorSavingFunction() {

  // save input
  const saveInput = isUpdate('save', '-input').value
  const saveValue = parseFloat(saveInput)

  // income input 
  const incomeInput = isUpdate('income', '-input').value
  const incomeValue = parseFloat(incomeInput)

  const totalSave = (incomeValue * saveValue) / 100;
  const totalSaveValue = totalSave;

  // error handling save button
  if(isNaN(saveValue)){
    alert('Please enter somethings in the input')
  }
  else if( totalSaveValue > incomeValue){
    alert('You do not have enough money to save')
  }
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
