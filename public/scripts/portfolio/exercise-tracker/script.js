const dateP = document.querySelector('p.todays-date');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function getTodaysDate() {
  const today = new Date();
  const dayName = days[today.getDay()];
  const dd = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${dayName} | ${month} ${dd} ${year}`;
}
dateP.innerHTML = getTodaysDate();


