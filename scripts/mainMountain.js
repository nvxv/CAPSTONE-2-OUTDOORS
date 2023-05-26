// Retrieve the mountain select dropdown element
const mountainSelect = document.getElementById("mountainSelect");

// Function to populate the dropdown menu with mountain options
function populateMountainDropdown() {
    console.log(mountainsArray);
    for (const mountain of mountainsArray) {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainSelect.appendChild(option);
    }
}

// Function to display mountain information based on the selected mountain
function displayMountainDetails(event) {
    const selectedMountain = mountainSelect.value;
    const mountainDetails = document.getElementById("mountainDetails");
 
    // Find the selected mountain in the mountainsArray
    const selectedMountainObj = mountainsArray.find(
      (mountain) => mountain.name === selectedMountain
    );
 
    // Display the mountain information
    mountainDetails.innerHTML = `
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img 
              class="img-fluid rounded-start img-custom" 
              src="./images/${selectedMountainObj.img}" 
              alt="${selectedMountainObj.name}" 
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${selectedMountainObj.name}</h2>
              <p>Description: ${selectedMountainObj.desc}</p>
              <p>Elevation: ${selectedMountainObj.elevation}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Display any other relevant mountain information -->
    `;
  }

// Event listener for when the mountain select dropdown changes
mountainSelect.addEventListener("change", displayMountainDetails);

// Call the function to populate the mountain dropdown initially
populateMountainDropdown(); 