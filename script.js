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
//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  depositNumber = parseFloat(depositAmount) || 00;
  const currentDeposit = document.getElementById("currentDeposit");
  const currentDepositNumber = parseFloat(currentDeposit.innerText);
  const totalDeposit = depositNumber + currentDepositNumber;
  currentDeposit.innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
  const currentBalance = document.getElementById("currentBalance");
  const currentBalanceNumber = parseFloat(currentBalance.innerText);
  const totalBalance = currentBalanceNumber + depositNumber;
  currentBalance.innerText = totalBalance;
});

//withdraw button event handler
const withdrawBtn = document.getElementById("lessWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    withdrawNumber=parseFloat(withdrawAmount) || 00;
    const currentWithdraw=document.getElementById('currentWithdraw');
    const currentWithdrawNumber=parseFloat(currentWithdraw.innerText);
    const totalWithdraw=withdrawNumber+currentWithdrawNumber;
    currentWithdraw.innerText=totalWithdraw;
    document.getElementById("withdrawAmount").value=""
    const currentBalance=document.getElementById('currentBalance');
    const currentBalanceNumber=parseFloat(currentBalance.innerText);
    const totalBalance=currentBalanceNumber-totalWithdraw;
    currentBalance.innerText=totalBalance;
});
