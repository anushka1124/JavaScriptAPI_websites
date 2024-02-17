const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const button = document.getElementById('search-button'),
input_word = document.getElementById('word'),
result = document.getElementById('result'),
headphone = document.querySelector('.headphones');
sound = document.getElementById('sound');

button.addEventListener('click' , () => {
    let word = input_word.value;
    headphone.classList.add('visible');
    fetch(`${url}${word}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    const speaker = headphone.classList.contains('visible') ? '<i class="fa-solid fa-headphones"></i>' : '';
        result.innerHTML = `<div class="result" id="result">
                            <div class="word">
                                <h3>${word}</h3>
                                <button onClick="playSound()">${speaker}</button>
                            </div>
                            <div class="details">
                                <p>${data[0].meanings[0].partOfSpeech}</p>
                                <p>${data[0].phonetic}</p>
                            </div>
                            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
                            <p class="word-example"></p>
                        </div>`
        
                        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
                        console.log(sound);
    })
    .catch(() => {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
    })
})


function playSound() {
    sound.play();
} 