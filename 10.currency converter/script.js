let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

const convertBtn = document.getElementById("convert-button");
const userInput = document.getElementById("amount");
const result = document.getElementById("result");

//create dropDown from the currency array

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
})

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    const amount = userInput.value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0) {
        fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];

            // const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            const convertedAmount = (amount/fromExchangeRate) * toExchangeRate
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        })
    }else {
        alert("please fill the amount");
    }
};

convertBtn.addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);