let incomeList = [];
let spendingList = [];

// Dodawanie przychodu

function addIncome() {
  const incomeCategory = document.getElementById("incomeCategory").value;
  const incomeAmount = parseFloat(
    document.getElementById("incomeAmount").value
  );

  if (incomeCategory && !isNaN(incomeAmount)) {
    incomeList.push({ category: incomeCategory, amount: incomeAmount });
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

    cellCategory.textContent = income.category;
    cellAmount.textContent = income.amount.toFixed(2);
  });
}

// Aktualizacja przychodu całkowitego

function updateTotalIncome() {
  const totalIncomeElement = document.getElementById("totalIncome");
  const totalIncome = incomeList.reduce(
    (total, income) => total + income.amount,
    0
  );
  totalIncomeElement.textContent = totalIncome.toFixed(2);
}

// Funkcja dodawania wydatków

function addSpending() {
  const spendingCategory = document.getElementById("spendingCategory").value;
  const spendingAmount = parseFloat(
    document.getElementById("spendingAmount").value
  );

  if (spendingCategory && !isNaN(spendingAmount)) {
    spendingList.push({ category: spendingCategory, amount: spendingAmount });
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

    cellCategory.textContent = spending.category;
    cellAmount.textContent = spending.amount.toFixed(2);
  });
}

// Aktualizacja całkowitych wydatków

function updateTotalSpending() {
  const totalSpendingElement = document.getElementById("totalSpending");
  const totalSpending = spendingList.reduce(
    (total, spending) => total + spending.amount,
    0
  );
  totalSpendingElement.textContent = totalSpending.toFixed(2);
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

  remainingBalance.querySelector("span").textContent = balance.toFixed(2);

  if (balance > 0) {
    remainingBalance.classList.remove("zero-balance");
    remainingBalance.classList.add("positive-balance");
  } else if (balance < 0) {
    remainingBalance.classList.remove("zero-balance", "positive-balance");
    remainingBalance.classList.add("negative-balance");
  } else {
    remainingBalance.classList.remove("positive-balance", "negative-balance");
    remainingBalance.classList.add("zero-balance");
  }

  balanceText.textContent = `Saldo wynosi ${balance.toFixed(2)}`;
}

document
  .getElementById("incomeAmount")
  .addEventListener("input", updateBalanceInfo);
document
  .getElementById("spendingAmount")
  .addEventListener("input", updateBalanceInfo);

updateBalanceInfo();
