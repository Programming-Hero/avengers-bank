// first page login part

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// transaction page part

// deposit input part

const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {

    // deposit part
    // const depositAmount = document.getElementById('depositAmount').value
    // const depositAmountNumber = parseFloat(depositAmount);

    const depositAmountNumber = getInput("depositAmount");

    updateText("currentDeposit", depositAmountNumber);
    updateText("currentBalance", depositAmountNumber);

    document.getElementById('depositAmount',).value = "";



})

function updateText(id, depositAmountNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current)
    const total = currentNumber + depositAmountNumber;
    document.getElementById(id).innerText = total;
}

function getInput(id) {
    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// withdraw part

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    const submitAmountNumber = getInput("submitAmount")

    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = submitAmountNumber + currentWithdrawNumber;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;


    // balance part
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - submitAmount;
    // document.getElementById('currentBalance').innerText = totalBalance;

    updateText("currentWithdraw", submitAmountNumber);
    updateText("currentBalance", -1 * submitAmountNumber);

    document.getElementById('submitAmount').value = "";

})