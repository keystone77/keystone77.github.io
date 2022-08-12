function onGeoOk(posision) {
    const lat = posision.coords.latitude;
    const lng = posision.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d99bb73eb829f69a6c6e43f8a1dfdaed`;
    console.log(url);
    fetch(url).then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

