let incomeList = [];
let spendingList = [];

// Funkcja informacyjna
function validateInput(category, amount) {
  if (!category.trim() || isNaN(amount) || amount <= 0) {
    alert("Wprowadź dane");
    return false;
  }
  return true;
}

// Funkcja dodawania przychodu
function addIncome() {
  const incomeCategory = document.getElementById("incomeCategory").value;
  const incomeAmount = parseFloat(
    document.getElementById("incomeAmount").value
  );

  if (validateInput(incomeCategory, incomeAmount)) {
    incomeList.push({ category: incomeCategory, amount: incomeAmount });
    updateIncomeTable();
    updateTotalIncome();
    updateBalanceInfo();
  }
}

// Funkcja edytowania przychodu
function editIncome(income) {
  const newName = prompt("Nowa nazwa przychodu:", income.category);
  const newAmount = prompt("Nowa kwota przychodu:", income.amount);

  if (newName !== null && newAmount !== null) {
    income.category = newName;
    income.amount = parseFloat(newAmount);
    updateIncomeTable();
    updateTotalIncome();
    updateBalanceInfo();
  }
}

// Funkcja usuwania przychodu
function deleteIncome(income) {
  const index = incomeList.indexOf(income);
  if (index !== -1) {
    incomeList.splice(index, 1);
    updateIncomeTable();
    updateTotalIncome();
    updateBalanceInfo();
  }
}

// Aktualizacja tabeli przychodu
function updateIncomeTable() {
  const incomeTableBody = document.querySelector("#incomeTable tbody");
  incomeTableBody.innerHTML = "";

  incomeList.forEach((income) => {
    const row = incomeTableBody.insertRow();
    const cellCategory = row.insertCell(0);
    const cellAmount = row.insertCell(1);
    const cellActions = row.insertCell(2);

    cellCategory.textContent = income.category;
    cellAmount.textContent = income.amount.toFixed(2) + " zł ";

    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.addEventListener("click", () => editIncome(income));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", () => deleteIncome(income));

    cellActions.appendChild(editButton);
    cellActions.appendChild(deleteButton);
  });
}

// Funkcja dodawania wydatków
function addSpending() {
  const spendingCategory = document.getElementById("spendingCategory").value;
  const spendingAmount = parseFloat(
    document.getElementById("spendingAmount").value
  );

  if (validateInput(spendingCategory, spendingAmount)) {
    spendingList.push({ category: spendingCategory, amount: spendingAmount });
    updateSpendingTable();
    updateTotalSpending();
    updateBalanceInfo();
  }
}

// Funkcja edytowania wydatków
function editSpending(spending) {
  const newName = prompt("Nowa nazwa wydatku:", spending.category);
  const newAmount = prompt("Nowa kwota wydatku:", spending.amount);

  if (newName !== null && newAmount !== null) {
    spending.category = newName;
    spending.amount = parseFloat(newAmount);
    updateSpendingTable();
    updateTotalSpending();
    updateBalanceInfo();
  }
}

// Funkcja usuwania wydatków
function deleteSpending(spending) {
  const index = spendingList.indexOf(spending);
  if (index !== -1) {
    spendingList.splice(index, 1);
    updateSpendingTable();
    updateTotalSpending();
    updateBalanceInfo();
  }
}

// Aktualizacja tabeli wydatków
function updateSpendingTable() {
  const spendingTableBody = document.querySelector("#spendingTable tbody");
  spendingTableBody.innerHTML = "";

  spendingList.forEach((spending) => {
    const row = spendingTableBody.insertRow();
    const cellCategory = row.insertCell(0);
    const cellAmount = row.insertCell(1);
    const cellActions = row.insertCell(2);

    cellCategory.textContent = spending.category;
    cellAmount.textContent = spending.amount.toFixed(2) + " zł ";

    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.addEventListener("click", () => editSpending(spending));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", () => deleteSpending(spending));

    cellActions.appendChild(editButton);
    cellActions.appendChild(deleteButton);
  });
}

// Aktualizacja całkowitych wydatków
function updateTotalSpending() {
  const totalSpendingElement = document.getElementById("totalSpending");
  const totalSpending = spendingList.reduce(
    (total, spending) => total + spending.amount,
    0
  );
  totalSpendingElement.textContent = totalSpending.toFixed(2) + " zł ";
}

// Aktualizacja całkowitego przychodu
function updateTotalIncome() {
  const totalIncomeElement = document.getElementById("totalIncome");
  const totalIncome = incomeList.reduce(
    (total, income) => total + income.amount,
    0
  );
  totalIncomeElement.textContent = totalIncome.toFixed(2) + " zł ";
}

// Aktualizacja salda
function updateBalanceInfo() {
  const balanceText = document.getElementById("balanceText");
  const remainingBalance = document.getElementById("remainingBalance");

  const totalIncome = incomeList.reduce(
    (total, income) => total + income.amount,
    0
  );
  const totalSpending = spendingList.reduce(
    (total, spending) => total + spending.amount,
    0
  );
  const balance = totalIncome - totalSpending;

  balanceText.textContent =
    balance > 0
      ? `Możesz jeszcze wydać ${balance.toFixed(2)} złotych`
      : balance < 0
      ? `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance).toFixed(
          2
        )} złotych`
      : "Bilans wynosi zero";

  if (balance > 0) {
    remainingBalance.classList.remove("zero-balance", "negative-balance");
    remainingBalance.classList.add("positive-balance");
  } else if (balance < 0) {
    remainingBalance.classList.remove("zero-balance", "positive-balance");
    remainingBalance.classList.add("negative-balance");
  } else {
    remainingBalance.classList.remove("positive-balance", "negative-balance");
    remainingBalance.classList.add("zero-balance");
  }
}

// Początkowe wywołanie aktualizacji salda
updateBalanceInfo();
