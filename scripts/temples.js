
const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#navigate');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/*get the current year and place it in footer*/
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/*get last modified and place in footer*/
let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;

