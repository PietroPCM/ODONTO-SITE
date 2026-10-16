import { initMenu, initActiveSection } from "./menu.js";
import { initJourney } from "./journey.js";
import { initConcerns } from "./concerns.js";
import { initDock } from "./dock.js";
import { initMap } from "./map.js";

initMenu();
initActiveSection();
initJourney();
initConcerns();
initDock();
initMap();

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
