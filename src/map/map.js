import edinburghMap from "../assets/edinburgh_map.svg";
import { fetchSvg } from "../utils/fetchSvg";

let edinburghMapsvg = null;

export const mapBounds = {
  bottom: 55.85361336337268,
  left: -3.5110821302941106,
  right: -3.018069115777291,
  top: 56.0000222,
};

export async function loadMap() {
  edinburghMapsvg = await fetchSvg(edinburghMap);
  edinburghMapsvg.setAttribute("id", "base-map");
  document.getElementById("main").appendChild(edinburghMapsvg);
}
