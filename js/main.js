VANTA.NET({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.00,
  color: 0x3e1fcf,
  points: 17.00,
  maxDistance: 26.00
})

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) { 
    if (window.event.keyCode == 123 ||  e.button==2)    
    return false;
}

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};