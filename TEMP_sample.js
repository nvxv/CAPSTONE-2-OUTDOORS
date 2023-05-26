function stateChange(changeEvent) {
  const parentElement = document.querySelector("main");
  const selectedState = changeEvent.target.value;
  const matchedPark = filterParkData(selectedState);
  console.log(selectedState);

  parentElement.replaceChildren();

  matchedPark.forEach((element) => {
    let locationItem = document.createElement("p");
    let locationItemText = document.createTextNode(
      `${element.locationName}\n
            ${element.City}\n
            ${element.State}\n
            ${element.Address}\n
            ${element.Visit}`
    );

    Object.keys(element).forEach((visit) => {
      if (element[visit] === undefined) {
        delete element[visit]
      }
    });

    locationItem.append(locationItemText);
    parentElement.append(locationItem)
  });

}

function filterParkData(selectedState) {
  const parkByState = nationalParksArray.filter(
    (parkObject) => parkObject.State === selectedState
  );
  return parkByState
}

function parkChange(changeEvent) {
  const parentElement = document.querySelector("main");
  const selectedParkByUser = changeEvent.target.value;
  const matchedParkType = filterParkData(selectedParkByUser);

}
