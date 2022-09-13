let price = document.querySelector("#price");
let number = document.querySelector("#number");
let value = document.querySelector("#value");

function calcAmount() {
    let priceValue = Number(price.value);
    let numberValue = Number(number.value);
    let x = 0;
    if(price !== 0 && number !== 0) {
        x = priceValue*numberValue;
        value.innerText = x;
    }
}

price.addEventListener('input', calcAmount);
number.addEventListener('input', calcAmount);