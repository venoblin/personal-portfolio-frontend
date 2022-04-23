const calendar = document.getElementById('calendar');

function isWeekend(day) {
    return day % 7 === 6 || day % 7 === 0;
}
function weekdayName(day) {
    return day === 1 ? 'Monday'
        : day === 2 ? 'Tuesday'
            : day === 3 ? 'Wednesday'
                : day === 4 ? 'Thursday'
                    : day === 5 ? 'Friday'
                        : day === 6 ? 'Saturday'
                            : day === 7 ? 'Sunday'
                                : '';
}

for (let day = 1; day <= 31; day++) {
    const weekend = isWeekend(day);
    const dayName = weekdayName(day);

    calendar.insertAdjacentHTML('beforeend',
        `<div class="day ${weekend ? "weekend" : ""}"><p>${dayName}</p><p>${day}</p></div>`);
}

const days = document.querySelectorAll('#calendar .day');

days.forEach(day => {
    day.addEventListener('click', () => {

    });
});