//API Font Load
WebFont.load({
  google: {
    families: [
       'Margarine',
       'Cabin',
       'Playfair Display'
    ]
  }
});

//Menu button toggle
const hambutton=document.querySelector('.ham');
const mainnav=document.querySelector('.responsive');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});

//Date Modified
let dateModified = document.lastModified;
document.getElementById('dateandtime').innerHTML = dateModified
