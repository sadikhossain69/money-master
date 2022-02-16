// variable declare
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById('balance')

// function getUserInput () {
//   const input = document.getElementById("income-input");
//   return input
// }

// calculate button handle
document.getElementById('calculator-btn').addEventListener('click', function(){

    // total expenses handle
    const foodValue = foodInput.value
    const rentValue = rentInput.value
    const clothesValue = clothesInput.value
    const totalExpensesAmount = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    totalExpenses.innerText = totalExpensesAmount
    const incomeValue = incomeInput.value
    const totalBalance = parseFloat(incomeValue) - totalExpensesAmount
    balance.innerText = totalBalance

})