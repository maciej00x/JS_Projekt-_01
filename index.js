function updateTotal() {
  let totalIncome = 0;
  let totalSpending = 0;

  totalIncome +=
    parseFloat(document.getElementById("incomeSalary").innerText) || 0;
  totalIncome +=
    parseFloat(document.getElementById("incomeRent").innerText) || 0;
  totalIncome +=
    parseFloat(document.getElementById("incomeUtilities").innerText) || 0;

  totalSpending +=
    parseFloat(document.getElementById("spendingSalary").innerText) || 0;
  totalSpending +=
    parseFloat(document.getElementById("spendingRent").innerText) || 0;
  totalSpending +=
    parseFloat(document.getElementById("spendingUtilities").innerText) || 0;

  document.getElementById("totalIncome").innerText = totalIncome;
  document.getElementById("totalSpending").innerText = totalSpending;
}

updateTotal();
