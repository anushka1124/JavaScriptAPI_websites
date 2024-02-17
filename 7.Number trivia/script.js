let getFactButton = document.getElementById('get-fact-btn');
let randomFactButton = document.getElementById('ran-fact-btn');
let result = document.querySelector('.fact');

const url = 'http://numbersapi.com/';


let fetchUrl = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl)
    .then((res) => res.text())
    .then((data) => {
        result.style.display = 'block';
        result.innerHTML = `<h2>${num}</h2>
                            <p>${data}</p>`
        document.querySelector('.container').append(result);
    })
}

let getFact = () => {
    let num = document.getElementById('user-input').value;

    if(num) {
        if(num >= 0 && num <= 300) {
            fetchUrl(num);
        }else {
            result.style.display = "block";
            result.innerHTML = `<p class="msg"> Please enter a number between 0 to 300 🥲.</p>`
        }
    }else {
        result.style.display = "block";
        result.innerHTML = `<p class="msg">The Input space cannot be Empty 🫡.</p>`
    }
}

let getRandomFact = () => {
    let num = Math.floor(Math.random() * 301);
    fetchUrl(num);
}

getFactButton.addEventListener('click' , getFact);
randomFactButton.addEventListener('click' , getRandomFact);
window.addEventListener('load' , getRandomFact);
