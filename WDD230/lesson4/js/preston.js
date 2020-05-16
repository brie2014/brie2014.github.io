//Menu button toggle
const hambutton=document.querySelector('.ham');
const mainnav=document.querySelector('.responsive');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});


//Date in this format Wednesday, 24 July 2020
let today = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = weekdays[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById('currentdate').innerHTML=date;
