// variable declare
// const incomeInput = document.getElementById("income-input");
// const foodInput = document.getElementById("food-input");
// const rentInput = document.getElementById("rent-input");
// const clothesInput = document.getElementById("clothes-input");
// const totalExpenses = document.getElementById("total-expenses");
// const balance = document.getElementById('balance')

function isInput (event1, event2) {
   const input = document.getElementById(event1 + event2)
   return input
}

// calculate button handle
document.getElementById('calculator-btn').addEventListener('click', function(){

    // total expenses handle
    const foodValue = isInput('food', '-input').value
    const rentValue = isInput('rent', '-input').value
    const clothesValue = isInput('clothes', '-input').value
    const totalExpensesAmount = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    const totalExpenses = isInput('expenses', '-total')
    totalExpenses.innerText = totalExpensesAmount
    const incomeValue = isInput('income', '-input').value
    const totalBalance = parseFloat(incomeValue) - totalExpensesAmount
    const balance = isInput('balance', '-total')
    balance.innerText = totalBalance

})