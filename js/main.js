import { initMenu, initActiveSection } from "./menu.js";
import { initConcerns } from "./concerns.js";
import { initDock } from "./dock.js";
import { initMap } from "./map.js";
import { initSteps } from "./steps.js";

initMenu();
initActiveSection();
initConcerns();
initDock();
initMap();
initSteps();

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
