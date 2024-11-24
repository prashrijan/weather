const WEATTHER_API_KEY = "1476ae6554527c8bb8a179fe0c758dd9";
const weather_api = "https://api.openweathermap.org/data/2.5/weather?q="; // &appid = {API_KEY}

const inputElem = document.getElementById("input");
const searchElem = document.getElementById("search");

const weatherDetsCard = document.getElementById("weather-details");

// create and display card
const displayDetails = (obj) => {
  console.log(obj);
  weatherDetsCard.innerHTML = "";

  weatherDetsCard.innerHTML = `
       <div class="text-center bg-transparent">
            <div class="card-body">
              <h2 class="card-title fw-bold fs-1 mb-3">${obj.name}</h2>
              <span class="fs-4 f2-semibold">
                <span id="icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/252/252035.png"
                    height="40"
                  />
                </span>
                ${kelvinToCelcius(obj.main.temp)}&deg;C
              </span>
            </div>
          </div>
          

  `;
  console.log(obj);
};

// fetch data from api
const fetchData = async (val) => {
  try {
    const res = await fetch(weather_api + val + "&appid=" + WEATTHER_API_KEY);
    const data = await res.json();
    displayDetails(data);
  } catch (error) {
    alert(error);
    return;
  }
};

// get the value and fetch the data
searchElem.addEventListener("click", () => {
  const value = inputElem.value;

  if (!value) {
    alert("Please enter a location.");
  }

  fetchData(value);

  inputElem.value = "";
});

// convert kelvin into celcius
const kelvinToCelcius = (tempInKelvin) => {
  return Math.round(tempInKelvin - 273.15);
};
