const inputBill = document.querySelector("#bill");

const inputCash = document.querySelector("#cash");

const check = document.querySelector(".btn");

const returnNotes = document.querySelectorAll(".returnNotes");

const errorPrint = document.querySelector(".error");

check.addEventListener('click', checkHandler);


function checkHandler() {
    var billAmount = parseFloat(inputBill.value);
    var cashAmount = parseFloat(inputCash.value);


    if(billAmount > cashAmount){
        errorPrint.innerText = "Bill Amount should be less than Cash Amount"
        return;
    }

    if(isNaN(billAmount) || isNaN(cashAmount)){
        errorPrint.innerText = "Enter Valid Amount";
        return;
    }
    const notesDenomination = [2000, 500, 100, 50, 20, 10, 5, 1];

    var returnValue = cashAmount - billAmount;
    
    for (var i = 0 ; i <= notesDenomination.length; i++) {

        const output = Math.trunc(returnValue / notesDenomination[i]);
        
        returnValue %= notesDenomination[i];
        
        returnNotes[i].innerText = output;
        
    }

}
