let url = "https://api.genderize.io?name=";

let button = document.getElementById('submit');
let result_wrap = document.getElementById('wrapper');

let getGender = () => {
    let name = document.getElementById('name');
    let error = document.getElementById('error');
    let userInp = name.value;
    const finalUrl = url + userInp;
    console.log(finalUrl);
    result_wrap.innerHTML="";
    error.innerHTML="";
    // /^[A-Za-z]+$/.test(name) -- makes sure that name should only contains alphabests
    if(userInp.length > 0 && /^[A-Za-z]+$/.test(userInp)) {
        fetch(finalUrl)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.name)
            console.log(data.gender)
            console.log(data.probability)
            
            let div = document.createElement('div');
            div.setAttribute('id', 'info');

            div.innerHTML = `<h2 id="result-name">${data.name}</h2>
                                    <img src = "" id="gender-icon" alt="gender"/>
                                    <h1 id="gender">${data.gender}</h1>
                                    <h4 id="prob">Probability: ${data.probability}</h4>`
            
            result_wrap.append(div);

            if(data.gender == 'female') {
                div.classList.add('female');
                document.getElementById('gender-icon').setAttribute('src', 'female.png');

            }else {
                div.classList.add('male');
                document.getElementById('gender-icon').setAttribute('src', 'male.png');
            }
        })
        name.value = '';
    }else {
        error.innerHTML = "Enter a valid name no spaces";
    }
    
}

button.addEventListener('click', getGender);