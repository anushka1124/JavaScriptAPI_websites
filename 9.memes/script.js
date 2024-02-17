let memeImg = document.getElementById('meme');
let title = document.getElementById('title');
let btn = document.getElementById('get-meme-btn');

//API URL
let url = " https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];
let getMeme = () => {
    let ranIndex = Math.floor(Math.random() * subreddits.length);
    let ranSubReddit = subreddits[ranIndex];
    console.log("hii")

    const finalUrl = url+ranSubReddit;

    fetch(finalUrl)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        console.log(data.title)
        console.log(data.url)

        memeImg.src = data.url;
        title.innerText = data.title;

        let ranColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0");
        console.log(ranColor);

        document.documentElement.style.setProperty("--theme-color", ranColor);
    })
}

btn.addEventListener('click', getMeme);
window.addEventListener('load' , getMeme);