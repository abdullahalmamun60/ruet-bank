//login button event hanndler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
  const depWidArea = document.getElementById("dep-with-area");
  depWidArea.style.display = "block";
});

//function
function finalDeposit(id,depositNumber) {
    const currentBalance = document.getElementById(id);
    const currentBalanceNumber = parseFloat(currentBalance.innerText);
    const totalBalance = currentBalanceNumber + depositNumber;
    currentBalance.innerText = totalBalance;
  }

  function textToNumber(id)
  {
    const depositAmount = document.getElementById("depositAmount").value;
    depositNumber = parseFloat(depositAmount) || 00;
  }
//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    textToNumber("depositAmount");
//   const depositAmount = document.getElementById("depositAmount").value;
//   depositNumber = parseFloat(depositAmount) || 00;
  finalDeposit("currentDeposit",depositNumber);
//   const currentDeposit = document.getElementById("currentDeposit");
//   const currentDepositNumber = parseFloat(currentDeposit.innerText);
//   const totalDeposit = depositNumber + currentDepositNumber;
//   currentDeposit.innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
  finalDeposit("currentBalance",depositNumber)
//   const currentBalance = document.getElementById("currentBalance");
//   const currentBalanceNumber = parseFloat(currentBalance.innerText);
//   const totalBalance = currentBalanceNumber + depositNumber;
//   currentBalance.innerText = totalBalance;
});

//withdraw button event handler
const withdrawBtn = document.getElementById("lessWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  withdrawNumber = parseFloat(withdrawAmount) || 00;
  finalDeposit("currentWithdraw",withdrawNumber);
//   const currentWithdraw = document.getElementById("currentWithdraw");
//   const currentWithdrawNumber = parseFloat(currentWithdraw.innerText);
//   const totalWithdraw = withdrawNumber + currentWithdrawNumber;
//   currentWithdraw.innerText = totalWithdraw;
  document.getElementById("withdrawAmount").value = "";
  finalDeposit("currentBalance",-1*withdrawNumber)
//   const currentBalance = document.getElementById("currentBalance");
//   const currentBalanceNumber = parseFloat(currentBalance.innerText);
//   const totalBalance = currentBalanceNumber - withdrawNumber;
//   currentBalance.innerText = totalBalance;
});


