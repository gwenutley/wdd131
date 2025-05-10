const currentYear = document.querySelector("#currentyear"); // Note the #
currentYear.textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;