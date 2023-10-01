const inputBill = document.querySelector("#bill");

const inputCash = document.querySelector("#cash");

const check = document.querySelector(".btn");

console.log(typeof(inputBill.value))

const returnNotes = document.querySelectorAll(".returnNotes");

const errorPrint = document.querySelector(".error");

check.addEventListener('click', checkHandler);

console.log(typeof(inputBill.value))


function error(output){
    if(output == NaN){
     errorPrint.innerText = "Enter Valid Amount";
}
}
function excessAmount(){
    if(inputBill.value > inputCash.value){
        errorPrint.innerText = "Bill Amount should be less than Cash Amount"
    }
}

function checkHandler() {
    if(inputBill.value > inputCash.value){
        errorPrint.innerText = "Bill Amount should be less than Cash Amount"
    }


    // excessAmount();
    const notesDenomination = [2000, 500, 100, 50, 20, 10, 5, 1];

    var returnValue = inputCash.value - inputBill.value;
    
    for (var i = 0 ; i <= notesDenomination.length; i++) {

        const output = Math.trunc(returnValue / notesDenomination[i]);
        
        returnValue %= notesDenomination[i];
        
        returnNotes[i].innerText = output;
        
    }

}
