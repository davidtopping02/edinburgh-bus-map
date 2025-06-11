import { loadMap } from "./map/map.js";
import { loadBuses } from "./map/buses.js";

async function main() {
  await loadMap();
  loadBuses();
}

main();
