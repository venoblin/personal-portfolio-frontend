const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function getTodaysDate() {
    const today = new Date();
    const dayName = days[today.getDay()];
    const dd = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const todaysDate = {
        dayName,
        month,
        dd,
        year
    }

    return todaysDate;
}

module.exports = getTodaysDate;