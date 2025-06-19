document.addEventListener('DOMContentLoaded', function () {

    /*get the current year and place it in footer*/
    const currentYear = document.querySelector("#currentyear");
    currentYear.textContent = new Date().getFullYear();

    /*get last modified and place in footer*/
    let lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = lastModified;



    //products array and creting its options
    
    const destinations = [
        {
            name: "iceland",
        },
        {
            name: "paris",
        },
        {
            name: "guatemala",
        },
        {
            name: "hawaii",
        },
        {
            name: "japan",
        },
        {
            name: "mexicocity",
        },
        {
            name: "netherlands",
        }
    ];

    const select = document.getElementById("destination");

    destinations.forEach(destination => {
        const option = document.createElement("option");
        option.value = destination.name;
        option.textContent = destination.name;
        select.appendChild(option);
    });
    


    /*populate the forms activities based on the destination selected*/
    const destinationChoice = document.getElementById('destination');
    const activities = document.getElementById('activities');

    const options = {
        hawaii: ["Kailua Beach", "Pearl Harbor", "Diamond Head Crator"],
        iceland: ["Reyinsfjara Beach", "Glacier Lagoon", "Reykjavik"],
        paris: ["Eiffel Tower", "Notre-Dame", "Louvre Museum"],
        guatemala: ["Antigua", "Lake Atitlan", "Pacaya Volcano"],
        japan: ["Tokyo", "Mount Fuji", "Himeji Castle"],
        mexicocity: ["Teotihuacan", "Chapultepec", "Xochimilco"],
        netherlands: ["Amsterdam", "Keukenhof Gardens", "Utrecht"]
    
    };


    destinationChoice.addEventListener('change', () => {
        const chosenDestination = destinationChoice.value;

        activities.innerHTML = "";

        if (options[chosenDestination]) {
            options[chosenDestination].forEach(activity => {
                const option = document.createElement("option");
                option.value = activity.toLowerCase().replace(/\s+/g, '-');
                option.textContent = activity;
                activities.appendChild(option);
            });
        }
    });
});





