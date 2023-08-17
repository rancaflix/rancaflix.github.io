import calendarview from "./calendarview.js";
import monthView from "./monthView.js";

const handleMonth = (month) => {
    calendarview.style.display = "none";
    monthView(month);
}

export default handleMonth