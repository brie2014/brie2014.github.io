//Menu button toggle
const hambutton=document.querySelector('.ham');
const mainnav=document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});


//Date
let today = new Date();
let date= today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();;
document.getElementById('currentdate').innerHTML=date;
