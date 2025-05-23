/*get the current year and place it in footer*/
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/*get last modified and place in footer*/
let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;

/*calculate wind chill*/
function calculateWindChill(temp, windspeed) {
    if (temp <= 50 && windspeed >= 3) {
        return 35.74 + (0.6215 * temp) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temp * (windspeed ** 0.16));
    } else {
        return temp;
    } 
}

/*collect values from html doc*/
const temperature = document.getElementById("temp");
const wind = document.getElementById("windspeed");
const windchill = document.getElementById("windchill");

/*remove the labels from the values*/
const tempNum = parseFloat(temperature.textContent);
const windNum = parseFloat(wind.textContent);

/*calculate windchill */
const windChillCalculated = calculateWindChill(tempNum, windNum);

/*update html document*/
windchill.textContent = windChillCalculated.toFixed(1) + " °F";