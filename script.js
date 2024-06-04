//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
  const depWidArea = document.getElementById("dep-with-area");
  depWidArea.style.display = "block";
});

//function to update balance
function updateBalance(id, amount) {
  const currentElement = document.getElementById(id);
  const currentAmount = parseFloat(currentElement.innerText);
  const newBalance = currentAmount + amount;
  currentElement.innerText = newBalance;
}

//function to get the current balance
function getCurrentBalance() {
  const currentBalanceElement = document.getElementById("currentBalance");
  return parseFloat(currentBalanceElement.innerText);
}

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount) || 0;
  updateBalance("currentDeposit", depositNumber);
  updateBalance("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = "";
});

//withdraw button event handler
const withdrawBtn = document.getElementById("lessWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount) || 0;
  const currentBalance = getCurrentBalance();
  
  if (withdrawNumber <= currentBalance) {
    updateBalance("currentWithdraw", withdrawNumber);
    updateBalance("currentBalance", -withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
  } else {
    alert("Withdrawal amount exceeds current balance!");
  }
});
