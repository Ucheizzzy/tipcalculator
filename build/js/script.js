const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const calculate = document.getElementById('calculate')
const total = document.getElementById('total')

function calculateTip() {
  const billVal = bill.value
  const tipVal = tip.value
  const totaltip = billVal * (1 + tipVal / 100)
  total.innerText = totaltip.toFixed(2)
}

calculate.addEventListener('click', calculateTip)
