let details = document.querySelector('.details');
let imgContainer = document.querySelector('.img-conatiner');
let userBtn = document.getElementById('get-user-btn');

let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data);
        console.log(data.avatar)
        console.log("name: "+ data.first_name);
        console.log(data.last_name);
        console.log("designation: "+ data.employment.title)
        console.log("location: "+ data.address.city)

        imgContainer.innerHTML = `<img src="${data.avatar}">`
        details.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
                                <h3>${data.employment.title}</h3>
                                <h4> <i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`

        let randomColor = "#" +((Math.random() * 0xffffff) << 0).toString(16).padStart(6 , "0");

        console.log(randomColor);

        document.documentElement.style.setProperty("--theme-color" , randomColor);
    })
}

userBtn.addEventListener('click' , getUser);
window.addEventListener('load' , getUser);