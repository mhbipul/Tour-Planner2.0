const showData = () => {
    const city = sessionStorage.getItem("name");
    const temp = sessionStorage.getItem("temp");
    const feels_like = sessionStorage.getItem("feels_like");
    const weatherMain = sessionStorage.getItem("weatherMain");
    const weatherDisc = sessionStorage.getItem("weatherDisc");
    const wind = sessionStorage.getItem("wind");

    document.getElementById("CityName").innerText = city;
    document.getElementById("temp").innerText = temp;
    document.getElementById("feels").innerText = "Feels like "+feels_like + "° C";
    document.getElementById("weatherMain").innerText = weatherMain;
    document.getElementById("weatherDescription").innerText = weatherDisc;
    document.getElementById("wind").innerText = wind;
}

showData();

document.getElementById("bakeToHome").addEventListener("click", function(){
    window.location = "../index.php";
});