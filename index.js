function addIncome() {
  const category = document.getElementById("incomeCategory").value;
  const amount = parseFloat(document.getElementById("incomeAmount").value) || 0;

  if (category && amount >= 0) {
    const table = document
      .getElementById("incomeTable")
      .getElementsByTagName("tbody")[0];
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerText = category;
    cell2.innerText = amount;

    // Clear input fields
    document.getElementById("incomeCategory").value = "";
    document.getElementById("incomeAmount").value = "";

    // Update total
    updateTotal();
  }
}

function addSpending() {
  const category = document.getElementById("spendingCategory").value;
  const amount =
    parseFloat(document.getElementById("spendingAmount").value) || 0;

  if (category && amount >= 0) {
    const table = document
      .getElementById("spendingTable")
      .getElementsByTagName("tbody")[0];
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerText = category;
    cell2.innerText = amount;

    // Clear input fields
    document.getElementById("spendingCategory").value = "";
    document.getElementById("spendingAmount").value = "";

    // Update total
    updateTotal();
  }
}

function updateTotal() {
  let totalIncome = calculateTotal("incomeTable");
  let totalSpending = calculateTotal("spendingTable");

  document.getElementById("totalIncome").innerText = totalIncome;
  document.getElementById("totalSpending").innerText = totalSpending;
}

function calculateTotal(tableId) {
  let total = 0;
  const tableRows = document
    .getElementById(tableId)
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  for (let i = 0; i < tableRows.length; i++) {
    const amount =
      parseFloat(tableRows[i].getElementsByTagName("td")[1].innerText) || 0;
    total += amount;
  }
  return total;
}
