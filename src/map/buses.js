import { getVehicleLocations } from "../api/tfeApiService";
import { latLngToSvgCoords } from "../utils/coordinateConversion";

function createBus(x, y) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("r", "2");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("fill", "red");
  circle.setAttribute("stroke", "grey");
  circle.setAttribute("stroke-width", "1");

  return circle;
}

export async function loadBuses() {
  const svgElement = document.getElementById("base-map");
  if (!svgElement) {
    console.error("SVG map not loaded yet");
    return;
  }

  const busData = await getVehicleLocations();

  const busElements = busData.vehicles.map(({ latitude, longitude }) => {
    const { x, y } = latLngToSvgCoords(latitude, longitude);
    return createBus(x, y);
  });

  busElements.forEach((bus) => svgElement.appendChild(bus));
}
