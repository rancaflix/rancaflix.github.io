import calendarview from "./calendarview.js";

const body = document.body;
const homecard = document.createElement("div");
homecard.id = "homecard";
homecard.appendChild(calendarview);
body.appendChild(homecard);