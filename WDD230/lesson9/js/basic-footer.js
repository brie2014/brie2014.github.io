let today = new Date();
let date = today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Google Fonts API Loader
WebFont.load({
    google: {
      families: [
         'Ubuntu'
      ]
    }
  })