import { mapBounds } from "../map/map.js";

// lat and long to SVG coordinates (x, y)
export function latLngToSvgCoords(lat, lng) {
  const svgElement = document.getElementById("base-map");
  if (!svgElement) {
    throw new Error("SVG element with id 'base-map' not found");
  }

  const viewBox = svgElement.getAttribute("viewBox");
  if (!viewBox) {
    throw new Error("SVG element has no viewBox attribute");
  }

  const [minX, minY, width, height] = viewBox.split(" ").map(Number);
  const xRatio = (lng - mapBounds.left) / (mapBounds.right - mapBounds.left);
  const yRatio = (mapBounds.top - lat) / (mapBounds.top - mapBounds.bottom);

  const x = minX + xRatio * width;
  const y = minY + yRatio * height;

  return { x, y };
}
