// Create an array of freelancers, occupations, and prices
const maxfreelancers = 3;
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  let currentFreelancers = [];

// Display each freelancer on the page
const addFreelancerId = setInterval(addFreelancer, 1000);

// render();

function render() {
    // Render the squares
    const freeNames = document.querySelector("#free-Names");
    const occupations = document.querySelector("#occupations");
    const startPrices = document.querySelector("#start-Prices");

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
      element.textContent = freelancer.price;
      return element;
    });

    freeNames.replaceChildren(...nameElements);
    occupations.replaceChildren(...occupationElements);
    startPrices.replaceChildren(...priceElements);
}

function addFreelancer() {

    const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    
    currentFreelancers[0] = (freelancer);

    render();
    if (currentFreelancers.length >= maxfreelancers) {
        clearInterval(addFreelancerId);
    }
}