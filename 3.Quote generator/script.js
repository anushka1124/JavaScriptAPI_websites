let quote = document.getElementById("quote"),
author = document.getElementById("author"),
button = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        quote.innerText = `${data.content}`;
        author.innerText = `${data.author}`;
    })
}

button.addEventListener('click' , getQuote);
window.addEventListener('load' , getQuote);