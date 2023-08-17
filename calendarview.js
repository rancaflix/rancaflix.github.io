import handleMonth from "./handleMonth.js";

const calendarview = document.createElement("div");
calendarview.id = "calendarview";
fetch('./months.json')
    .then(response => response.json())
    .then(data => {
        const monthNames = Object.keys(data);
        const monthDivs = monthNames.map(month => {
            const div = document.createElement("div");
            div.classList.add("monthdiv");
            const span = document.createElement("span");
            span.classList.add("monthspan");
            span.textContent = month;
            div.appendChild(span);
            div.addEventListener("click", () => handleMonth(month))
            return div;
        });
    monthDivs.forEach(div => calendarview.appendChild(div));
    });

export default calendarview;
