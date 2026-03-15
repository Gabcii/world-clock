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

  let canaryElement = document.querySelector("#canary");
  let canaryDateElement = canaryElement.querySelector(".date");
  let canaryTimeElement = canaryElement.querySelector(".time");
  let canaryTime = moment().tz("Atlantic/Canary");
  canaryDateElement.innerHTML = canaryTime.format("MMMM Do, YYYY");
  canaryTimeElement.innerHTML = canaryTime.format(
    "H:mm:ss [<small>]A[</small>]",
  );
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
            <a href="index.html"> All cities</a>
        `;
}
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
