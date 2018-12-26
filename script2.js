// Open the Modal
const modal = document.querySelectorAll('.modal');
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const box = document.getElementById('portfolio');
function modalZoomOut() {
  return box.classList.toggle('content-zoom-in');
}
function openModal1() {
  box.classList.toggle('content-zoom-in');
  setTimeout(function(){
    modal1.style.display = 'block';
  }, 500);
}
function openModal2() {
  return modal2.style.display = 'block';
}
function openModal3() {
  return modal3.style.display = 'block';
}
function openModal4() {
  return modal4.style.display = 'block';
}
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('demo');
  const captionText1 = document.getElementById('caption1');
  const captionText2 = document.getElementById('caption2');
  const captionText3 = document.getElementById('caption3');
  const captionText4 = document.getElementById('caption4');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  captionText1.innerHTML = dots[slideIndex-1].alt;
  captionText2.innerHTML = dots[slideIndex-1].alt;
  captionText3.innerHTML = dots[slideIndex-1].alt;
  captionText4.innerHTML = dots[slideIndex-1].alt;
}

window.onclick = function(event) {
  if (event.target === modal[0]) {
    modal[0].style.display = 'none';
  }  if (event.target === modal[1]) {
    modal[1].style.display = 'none';
  }  if (event.target === modal[2]) {
    modal[2].style.display = 'none';
  }  if (event.target === modal[3]) {
    modal[3].style.display = 'none';
  }
};
