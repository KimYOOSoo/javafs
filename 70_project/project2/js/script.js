
//section dream
const playBtn = document.querySelector('.play')
const dreamVid = document.querySelector('.dreamVid')
const yd = document.querySelector('.ydream')
const ydDiv = document.querySelector('.wish10')
playBtn.onclick = function () { dreamVid.play(), ydDiv.innerText = yd.value, playBtn.style.display = 'none', yd.style.display = 'none' }


//section event

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const liTag = document.querySelectorAll('#event li')
let currentSlide = 0

nextBtn.onclick = function () {
  if (currentSlide > 5 || currentSlide < 0) {
    currentSlide = -1
  }
  console.log(currentSlide)
  currentSlide++
  carousel.style.transform = `translateX(-${473 * currentSlide}px)`;
}




prevBtn.onclick = function () {
  if (currentSlide > 5 || currentSlide < 0) {
    currentSlide = -1
  }
  console.log(currentSlide)
  currentSlide--
  carousel.style.transform = `translateX(-${473 * currentSlide}px)`;
}
