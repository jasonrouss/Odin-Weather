var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var cName = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
const units = document.querySelector(".units");
var unitCheck = "";

units.addEventListener("click", function () {
  if (units.value === "metric") {
    units.value = "imperial";
  } else if (units.value === "imperial") {
    units.value = "metric";
  }
  checkUnit();
});

function checkUnit() {
  if (units.value === "metric") {
    unitCheck = "°C";
  } else if (units.value === "imperial") {
    unitCheck = "°F";
  }
}
checkUnit();

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&units=" +
      units.value +
      "&APPID=a90ad88289bc571e92a215e7756ebe95"
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      cName.innerHTML = nameValue;
      temp.innerHTML = tempValue + unitCheck;
      desc.innerHTML = descValue;
    })

    .catch((err) => alert("Wrong city name"));
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue.value +
        "&units=" +
        units.value +
        "&APPID=a90ad88289bc571e92a215e7756ebe95"
    )
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];

        cName.innerHTML = nameValue;
        temp.innerHTML = tempValue + unitCheck;
        desc.innerHTML = descValue;
      })

      .catch((err) => alert("Wrong city name"));
  }
});
