// Retrieve the parkLocation select dropdown element
const parkTypeSelect = document.getElementById("parkTypeSelect");
const parkLocationSelect = document.getElementById("parkLocationSelect");
// Function to populate the dropdown menu with parkLocation options

function populateParkLocationDropdown() {
  for (const parkLocation of nationalParksArray) {
    const option = document.createElement("option");
    option.value = parkLocation.State;
    option.textContent = parkLocation.State;
    parkLocationSelect.appendChild(option);
  }
}

function populateParkTypeDropdown() {
  for (const parkType of parkTypesArray) {
    const option = document.createElement("option");
    option.value = parkType
    option.innerText = parkType;
    parkTypeSelect.appendChild(option);
  }
}

// Function to display parkLocation information based on the selected parkLocation
function displayParks() {
  const selectedState = parkLocationSelect.value; // event target gets newest value
  const selectedParkType = parkTypeSelect.value;
  
  const parkLocationDetails = document.getElementById("parkLocationDetails");

  parkLocationDetails.innerHTML = ""

  // Find the selected parkLocation in the nationalParksArray
  const matchingParks = nationalParksArray.filter(
    (parkData) => {
      return (
        parkData.State === selectedState 
          && parkData
            .LocationName
            .toLowerCase()
            .includes(
              selectedParkType.toLowerCase()
            )
      )
    }
  );
  
  // choose details you want displayed
  const displayDetails = ["Address", "City", "State", "ZipCode", "Phone", "Fax", "Longitude", "Latitude"];
  matchingParks.forEach((currentPark) => {
    // currentPark, it's Bingo City 
    parkLocationDetails.innerHTML += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              ${currentPark.LocationName}
            </h5>
            <div class="list-group-container">
              <ul class="list-group list-group-flush">
                ${
                  Object
                    .entries(currentPark) /*
                      [
                        ["Phone", "(321) 367-9000"],
                        ["LocationName", "Bingo City"],
                        ["State", "Florida"],
                        ["DummyKey", "We won't display this"],
                      ]
                    */
                    .filter((parkDataEntry) => {
                      const [key, value] = parkDataEntry; // array destructuring 
                      return (
                        displayDetails.includes(key) 
                          && Boolean(value) // returns 0 = false to not be included
                      )
                    }) /*
                      [
                        ["Phone", "(321) 367-9000"],
                        ["State", "Florida"]
                      ]
                    */
                    .map((parkDataEntry) => {
                      const [key, value] = parkDataEntry // ["Phone", "(321) 367-9000"];
                      return `<li class="list-group-item">${key}: ${value}</li>`
                    }) /*
                      [
                        "<li class="list-group-item">Phone: (321) 367-9000</li>",
                        "<li class="list-group-item">State: Florida</li>",
                      ]
                    */
                   .join("\n")
                }
              </ul>
            </div>
          </div>
        </div>
      `;
  });

  // Display the parkLocation information
  /*    parkLocationDetails.innerHTML = `
       <h2>Name:${matchingParks.LocationName}</h2>
       <p>Address: ${matchingParks.Address}</p>
       <p>City: ${matchingParks.City}</p>
       <p>State: ${matchingParks.State}</p>
       <p>ZipCode: ${matchingParks.ZipCode}</p>
       <p>Phone: ${matchingParks.Phone}</p>
       <p>Fax: ${matchingParks.Fax}</p>
       <p>Latitude: ${matchingParks.Longitude}</p>
       <p>Longitude: ${matchingParks.Latitude}</p>
       <!-- Display any other relevant parkLocation information -->
     `; */
}

// Event listener for when the parkLocation select dropdown changes
parkLocationSelect.addEventListener("change", displayParks);
parkTypeSelect.addEventListener("change", displayParks);

// Call the function to populate the parkLocation dropdown initially
populateParkLocationDropdown();
populateParkTypeDropdown();

/*
STRETCH GOAL 

instead of using includes

look up Fuzzy Search
*/