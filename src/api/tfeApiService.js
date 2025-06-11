const tfeUrl = "https://tfe-opendata.com/api/v1";

export function getVehicleLocations() {
  return fetch(`${tfeUrl}/vehicle_locations`).then((response) =>
    response.json()
  );
}

export function getStopLocations() {
  return fetch(`${tfeUrl}/stops`).then((response) => response.json);
}
