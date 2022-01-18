const close = document.querySelector('.close');
const slideBar = document.querySelector('.slide-bar');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
     slideBar.classList.toggle('active');
     overlay.classList.toggle('active');
}

close.onclick = function () {
     slideBar.classList.toggle('active');
     overlay.classList.toggle('active');     
}