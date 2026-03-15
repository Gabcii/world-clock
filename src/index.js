function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss [<small>]A[</small>]",
  );
  let trollElement = document.querySelector("#troll");
  let trollDateElement = trollElement.querySelector(".date");
  let trollTimeElement = trollElement.querySelector(".time");
  let trollTime = moment().tz("Antarctica/Troll");
  trollDateElement.innerHTML = trollTime.format("MMMM Do, YYYY");
  trollTimeElement.innerHTML = trollTime.format("H:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>
        `;
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
