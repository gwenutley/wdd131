
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

/* temple objects array */
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guadalajara Mexico",
        location: "Guadalajara, Mexico",
        dedicated: "2001, April, 29",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guadalajara-mexico/400x250/guadalajara-mexico-temple-1368114-wallpaper.jpg"
    },
    {
        templeName: "Manhattan New York",
        location: "Manhattan, New York, United States",
        dedicated: "2002, September, 23",
        area: 20630,
        imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-248728-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Vernal Utah",
        location: "Vernal, Utah, United States",
        dedicated: "1997, November, 2-4",
        area: 38771,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, November, 14-16",
        area: 11610,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/guatemala-city-temple-lds-829605-wallpaper.jpg"
    }
];


// create temple cards
createTempleCard(temples)

const homeLink = document.querySelector("#home")
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const parts = temple.dedicated.split(',').map(part => part.trim());
        const [year, month, day] = parts;
    
        return year < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const parts = temple.dedicated.split(',').map(part => part.trim());
        const [year, month, day] = parts;

        return year > 2000;
    }));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});




function createTempleCard(filteredTemples) {
    const container = document.querySelector(".temple-cards");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", "Photo of" + temple.templeName + "Temple");
        img.setAttribute("loading", "lazy");

        const size = document.createElement("p");
        size.innerHTML = "Size: " + temple.area.toLocaleString() + " sq ft";

        const dedicated = document.createElement("p");
        dedicated.innerHTML = "Dedicated: " + temple.dedicated;

        const location = document.createElement("p");
        location.innerHTML = "Location: " + temple.location;

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);

        container.appendChild(card);
    });
}
