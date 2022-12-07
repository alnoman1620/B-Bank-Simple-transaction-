// Bank Part
//deposit btn
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmount = depositInput.value;
    
    const depositMoney = document.getElementById('deposit-money')
    const previousDepositAmount =  parseInt(depositMoney.innerText) + parseInt(newDepositAmount);
    depositMoney.innerText = previousDepositAmount;
    

//update account balance

const balanceMoney = document.getElementById('balance-money')

const previousBalanceAmount = parseInt(balanceMoney.innerText)
const newBalanceAmount = previousBalanceAmount + parseInt(newDepositAmount);

balanceMoney.innerText = newBalanceAmount;

//clear inputfield
depositInput.value = '';
    })


    document.getElementById('withdraw-btn').addEventListener('click',function(){
const withdrawInput = document.getElementById('withdraw-input')

const withdrawAmountText = withdrawInput.value
const newWithdrawAmount = parseFloat(withdrawAmountText)

const withdrawMoney = document.getElementById('withdraw-money')

const previousWithdrawTotal = parseFloat(withdrawMoney.innerText);

const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

withdrawMoney.innerText = newWithdrawTotal;

withdrawInput.value = '';



//update account balance

const balanceMoney = document.getElementById('balance-money');
const previousBalanceTotal =parseFloat(balanceMoney.innerText) 

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceMoney.innerText = newBalanceTotal;


    })

    

    