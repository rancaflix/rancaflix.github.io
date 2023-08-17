import calendarview from "./calendarview.js";
import handleDay from "./handleDay.js";

const monthView = async (month) => {
    // create or reestablish div
    const monthsDiv = document.createElement("div");
    monthsDiv.id = "monthsDiv";
    monthsDiv.style.display = "grid";
    
    // div for month title
    const monthName = document.createElement("div");
    monthName.id = "monthnamediv";
    monthsDiv.appendChild(monthName);
    
    // creates back button
    const chevronLeft =  document.createElement("img");
    chevronLeft.id = "chevronleft";
    chevronLeft.src = "./chevron-left.svg";
    monthName.appendChild(chevronLeft);

    // month title
    const monthTitle = document.createElement("span");
    monthTitle.textContent = `${month}`;
    monthName.appendChild(monthTitle);

    // functionality back button
    chevronLeft.addEventListener("click", () => {
        calendarview.style.display = "grid";
        monthsDiv.remove();
    })

    // appending
    const homecard = document.getElementById("homecard");
    homecard.appendChild(monthsDiv);
    
    // divs according to days
    try {
        const response = await fetch('./months.json'); // Adjust the file path if needed
        const data = await response.json();

        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

        if (data.hasOwnProperty(capitalizedMonth)) {
            const numberOfDays = data[capitalizedMonth];
            
            // Now you have the number of days, you can use it to create the divs
            for (let day = 1; day <= numberOfDays; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('daynumber');
                const daySpan = document.createElement('span');
                daySpan.textContent = day;
                daySpan.classList.add('dayspan')
                dayDiv.addEventListener("click", () => {
                    handleDay(month, day);
                    monthsDiv.remove();
                })
                dayDiv.appendChild(daySpan);
                monthsDiv.appendChild(dayDiv);
            }
        } else {
            console.log('Month not found');
        }
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}

export default monthView;
