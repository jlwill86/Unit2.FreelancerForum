const maxFreelancers = 3;
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "Dr. Wonder", price: 103, occupation: "doctor" },
    { name: "Prof. Sporty", price: 80, occupation: "developer" },
    { name: "Dr. Haha", price: 37, occupation: "trainer" },
    { name: "Prof. Window", price: 75, occupation: "driver" }
];

let currentFreelancers = [];

// Display each freelancer on the page
const addFreelancerId = setInterval(addFreelancer, 1000);

function render() {
    
    const freeNames = document.querySelector("#free-Names");
    const occupations = document.querySelector("#occupations");
    const startPrices = document.querySelector("#start-Prices");
    const avgPrice = document.querySelector(".avg-Price");

    const nameElements = currentFreelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = freelancer.name;
        return element;
    });

    const occupationElements = currentFreelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = freelancer.occupation;
        return element;
    });

    const priceElements = currentFreelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = `$${freelancer.price}`;
        element.style.color = "green";
        element.style.fontWeight = "bold";
        return element;
    });


    // Calculate the average price
    if(currentFreelancers.length >= 2)
    {let totalPrices = currentFreelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    let averagePrice = totalPrices / currentFreelancers.length;

    // Update the average price on the page
    avgPrice.textContent = `Average Price is $${averagePrice.toFixed(2)}`;
    avgPrice.style.color = "green";
}
    freeNames.replaceChildren(...nameElements);
    occupations.replaceChildren(...occupationElements);
    startPrices.replaceChildren(...priceElements);
    
}

function addFreelancer() {
    
    if (currentFreelancers.length >= maxFreelancers) {
        currentFreelancers.shift(); // Remove the oldest freelancer when there are more than maxFreelancers
    }

    let freelancerIndex = Math.floor(Math.random() * freelancers.length);

    // Check if the selected freelancer is already displayed
    while (currentFreelancers.some(freelancer => freelancer.name === freelancers[freelancerIndex].name)) {
        freelancerIndex = Math.floor(Math.random() * freelancers.length);
    }

    currentFreelancers.push(freelancers[freelancerIndex]);

    render();
}
