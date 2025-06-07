/*get the current year and place it in footer*/
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/*get last modified and place in footer*/
let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;

//products array and creting its options
window.onload = function () {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];
    
    const select = document.getElementById("product-type");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
};




//count the number of times the form is submitted
let count = localStorage.getItem('new-count');

if (count === null) {
    count = 1;
} else {
    count = parseInt(count, 10) + 1;
}

localStorage.setItem('new-count', count);

const counterDisplay = document.getElementById('new-count');
if (counterDisplay) {
    counterDisplay.textContent = `You have submitted ${count} review${count == 1 ? '' : 's'}.`;
} else {
    console.log('new-Count element not found');
}
