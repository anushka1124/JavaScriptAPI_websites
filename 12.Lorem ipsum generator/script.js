let url = `https://api.api-ninjas.com/v1/loremipsum?paragraphs=`;

let generateBtn = document.getElementById('generate');
let copyBtn = document.getElementById('copy');
let input = document.getElementById('number');
let result = document.querySelector('.result-wrapper');

let options = {
    method: "GET",
    headers: {'X-Api-Key': apiKey}
};

let generatePara = () => {
    let noOfPara = input.value;
    let finalUrl = url+noOfPara;
    fetch(finalUrl , options)
    .then(res => res.json()) 
    .then((data) => {
        console.log(data);

        result.innerText = data.text;
    })

}

// copy button

copyBtn.addEventListener('click' , () => {
    navigator.clipboard.writeText(result.innerText);
    alert("text copied to clipboard");
})

generateBtn.addEventListener('click' , generatePara);
window.addEventListener('load', generatePara);