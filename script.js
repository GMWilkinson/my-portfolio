// //
const modal = document.querySelectorAll('.modal');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const projectBoxes = document.querySelectorAll('.project-box');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const closeX = document.querySelectorAll('.delete');
const closeButton = document.querySelectorAll('.button');

const modals = [];

function openModals() {
  for (let i = 0; i < projectBoxes.length; i++) {
    projectBoxes[i].addEventListener('click', function() {
      console.log( projectBoxes[i], modals);
      if (projectBoxes[i] === box1) {
        return modal1.classList.toggle('is-active');
      } if (projectBoxes[i] === box2) {
        return modal2.classList.toggle('is-active');
      } if (projectBoxes[i] === box3) {
        return modal3.classList.toggle('is-active');
      } if (projectBoxes[i] === box4) {
        return modal4.classList.toggle('is-active');
      }
    })
  }
}
openModals();


function close() {
  for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener('click', function(event) {
      console.log(closeX[i]);
      if (event.target === closeX[i] || event.target === window) {
        return modal[i].classList.toggle('is-active');
      }
    })
  }
}

close();
// window.onclick = function(event) {
//   return modal1.classList.toggle('is-active');
// };


// const modal1 = document.getElementById('modal1');
// const box = document.querySelectorAll('.project-box');
// // const modal2 = document.getElementById('modal2');
// // const modal3 = document.getElementById('modal3');
// // const modal4 = document.getElementById('modal4');
// // const box = document.getElementById('box');
// // const close1 = document.getElementById('close1');
// // const close2 = document.getElementById('close2');
// // const close3 = document.getElementById('close3');
// // const close4 = document.getElementById('close4');
// // const closeArray = [close1, close2, close3, close4];
// const box1 = document.getElementById('pBox1');
// const box2 = document.getElementById('pBox2');
// const box3 = document.getElementById('pBox3').addEventListener('click', openModal1);
// const box4 = document.getElementById('pBox4').addEventListener('click', openModal1);
//
// // box.addEventListener('click', openModal1);
// function openModal1() {
//   if (box2) {
//     return modal1.classList.toggle('is-active');
//   }
// }
//
// // function openModal2() {
// //   box.classList.toggle('content-zoom-in');
// //   setTimeout(function(){
// //     modal2.style.display = 'block';
// //     box.classList.toggle('content-zoom-in');
// //   }, 500);
// // }
// // function openModal3() {
// //   box.classList.add('content-zoom-in');
// //   setTimeout(function(){
// //     modal3.style.display = 'block';
// //     box.classList.toggle('content-zoom-in');
// //   }, 500);
// // }
// // function openModal4() {
// //   box.classList.toggle('content-zoom-in');
// //   setTimeout(function(){
// //     modal4.style.display = 'block';
// //     box.classList.toggle('content-zoom-in');
// //   }, 500);
// // }
// //
// // function closeModal1() {
// //   document.getElementById('modal1').style.display = "none";
// // }
// // function closeModal2() {
// //   document.getElementById('modal2').style.display = "none";
// // }
// // function closeModal3() {
// //   document.getElementById('modal3').style.display = "none";
// // }
// // function closeModal4() {
// //   document.getElementById('modal4').style.display = "none";
// // }
// //
// // let slideIndex = 1;
// // showSlides(slideIndex);
// //
// // function currentSlide(n) {
// //   showSlides(slideIndex = n);
// // }
// //
// // function showSlides(n) {
// //   let i;
// //   const slides = document.getElementsByClassName('slides');
// //   const dots = document.getElementsByClassName('demo');
// //   const captionText1 = document.getElementById('caption1');
// //   const captionText2 = document.getElementById('caption2');
// //   const captionText3 = document.getElementById('caption3');
// //   const captionText4 = document.getElementById('caption4');
// //   if (n > slides.length) {
// //     slideIndex = 1;
// //   }
// //   if (n < 1) {
// //     slideIndex = slides.length;
// //   }
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = 'none';
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(' active', '');
// //   }
// //   slides[slideIndex-1].style.display = 'block';
// //   dots[slideIndex-1].className += ' active';
// //   captionText1.innerHTML = dots[slideIndex-1].alt;
// //   captionText2.innerHTML = dots[slideIndex-1].alt;
// //   captionText3.innerHTML = dots[slideIndex-1].alt;
// //   captionText4.innerHTML = dots[slideIndex-1].alt;
// // }
// //
