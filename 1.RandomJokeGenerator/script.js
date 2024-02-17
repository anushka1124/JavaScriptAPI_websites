const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");

const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=nsfw,religious,political,sexist&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
        return item.joke;
    });
}

const copyJoke = () => {
    let joke = jokeContainer.textContent;
    navigator.clipboard.writeText(joke)
    .then(() => {
        console.log('Joke copied:', joke);
        copy.innerText = "Copied!";
        setTimeout(() => {
            copy.innerText = "copy again";
        }, 3000);
    })
}

copy.addEventListener("click" , copyJoke);
btn.addEventListener("click" , getJoke);

getJoke();