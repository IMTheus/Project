


const key ='f98a0967953162e7c5e9abab73e200ca'



function showInApp(data){

    document.querySelector (".city").innerHTML = `tempo em ${data.name}`

    document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp) + "°C"

    document.querySelector (".text-weather").innerHTML = `${data.weather[0].description}`


    document.querySelector (".humidity").innerHTML = `Umidade ${data.main.humidity} %`

    document.querySelector (".img-weather").src== "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"

}





//async = tem como significado dizer que voce esta acessando um servidor

async function searchCity(city) {
    
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    showInApp(data)
}



function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}