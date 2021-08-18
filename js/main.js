//별똥별
const stars = document.querySelector('.stars');
let body = document.querySelector('body');
toggle.onclick =function(){
  toggle.classList.toggle('active');
  body.classList.toggle('dark');
  stars.classList.toggle('on');
}
//마우스 움직이면 원금감있게 움직임
document.addEventListener('mousemove', parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}
//스크롤 이동시 구름 원근감있게 동작
const cloudparallax1 = document.querySelector('#parallax1');
const cloudparallax2 = document.querySelector('#parallax2');
const cloudparallax3 = document.querySelector('#parallax3');
const cloudparallax4 = document.querySelector('#parallax4');
const cloudparallax5 = document.querySelector('#parallax5');
const cloudparallax6 = document.querySelector('#parallax6');
window.addEventListener('scroll', function () {
  const parallcloud = window.scrollY;
  cloudparallax1.style.top = parallcloud * 0.3 + 'px';
  cloudparallax2.style.top = parallcloud * 0.3 + 'px';
  cloudparallax3.style.top = parallcloud * 0.4 + 'px';
  cloudparallax4.style.top = parallcloud * 0.4 + 'px';
  cloudparallax5.style.top = parallcloud * 0.4 + 'px';
  cloudparallax6.style.bottom = parallcloud * 0.4 + 'px';
})
//두유노디스무비
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');
const element1 = document.querySelectorAll('span');
for (let i = 0; i < element1.length; i++) {
  element1[i].style.animationDelay = i * 0.04 + 's';
}


//동영상 슬라이드
const slideList = document.querySelector('.slide_list');
const slideContents = document.querySelectorAll('.slide_content');
const slideBtnNext = document.querySelector('.slide_btn_next');
const slideBtnPrev = document.querySelector('.slide_btn_prev');
const slideLen = slideContents.length;
let slideWidth = 800;
let slideSpeed = 300;
const startNum = 0;
const changeList = document.querySelector('.change_list');
const changeContents = document.querySelector('.change_content');
const changeLen = changeContents.length;
let changeWidth = 800;
let changeSpeed = 300;
const stNum = 0;

slideList.style.width = slideWidth * (slideLen + 2) + 'px';
changeList.style.width = changeWidth * (changeLen + 2) + 'px';

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);
let firstChild1 = changeList.firstElementChild;
let lastChild1 = changeList.lastElementChild;
let clonedFirst1 = firstChild1.cloneNode(true);
let clonedLast1 = lastChild1.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
let curIndex = startNum;
let curSlide = slideContents[curIndex];
curSlide.classList.add('slide_active');

changeList.appendChild(clonedFirst1);
changeList.insertBefore(clonedLast1, changeList.firstElementChild);
changeList.style.transform = "translate3d(-" + (changeWidth * (stNum + 1)) + "px, 0px, 0px)";
let curChange = changeContents[curIndex];

slideBtnNext.addEventListener('click', function () {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
    changeList.style.transition = changeSpeed + "ms";
    changeList.style.transform = "translate3d(-" + (changeWidth * (curIndex + 2)) + "px, 0px, 0px)";
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
      changeList.style.transition = "0ms";
      changeList.style.transform = "translate3d(-" + changeWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  ++curIndex;
  curSlide.classList.remove('slide_active');
  curSlide = slideContents[curIndex];
  curSlide.classList.add('slide_active');
  curChange.classList.remove('change_active');
  curChange = changeContents[curIndex];
  curChange.classList.add('change_active');
});

console.log(window.innerWidth)

slideBtnPrev.addEventListener('click', function () {
  if (curIndex >= 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
    changeList.style.transition = changeSpeed + "ms";
    changeList.style.transform = "translate3d(-" + (changeWidth * curIndex) + "px, 0px, 0px)";
  }
  if (curIndex === 0) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
      changeList.style.transition = "0ms";
      changeList.style.transform = "translate3d(-" + (changeWidth * changeLen) + "px, 0px, 0px)";
    }, slideSpeed, changeSpeed);
    curIndex = slideLen;
  }
  --curIndex;
  curSlide.classList.remove('slide_active');
  curSlide = slideContents[curIndex];
  curSlide.classList.add('slide_active');
  curChange.classList.remove('change_active');
  curChange = changeContents[curIndex];
  curChange.classList.add('change_active');
});

//캐릭터에 마우스 올렸을 때 숫자 증가
let numAnimation = document.querySelectorAll('.num_animation');

function changeNum(idx){
  let zero = 0;
  let targetNum = numAnimation[idx].getAttribute('data-rate');
  let timer = setInterval(function(){
    ++zero;
    numAnimation[idx].innerText = zero;
    if(zero == targetNum){
        clearInterval(timer);
        }
  },10);
}
const actor = document.querySelector('#actor');

actor.addEventListener('mouseenter', function(){
  for(let i = 0; i<numAnimation.length; i++){
    changeNum(i);
  }
})

//마우스 동글뱅이
const circle = document.querySelector('.circle');
circle.innerHTML = circle.textContent.replace(/\S/g, "<span>$&</span>");
const element2 = document.querySelectorAll('span');
for (let i = 0; i < element2.length; i++) {
  element2[i].style.transform = 'rotate(' + i * 18 + 'deg)'
}
document.addEventListener('mousemove', function (e) {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
})

//드래그 게임
const container =  document.querySelector('.image-container');
const startButton =  document.querySelector('.start-button');
const gameText =  document.querySelector('.game-text');
const playTime =  document.querySelector('.play-time');
const tileCount = 16;
let tiles = [];
const dragged = {
  el:null,
  class: null,
  index: null,
}
let isPlaying = false;
let timeInterval = null;
let time = 0;
function checkStatus(){
  const currentList = [...container.children];
  const unMatchedList = currentList.filter((child, index) => Number(child.getAttribute('data-index')) !== index)
  if(unMatchedList.length === 0) {
    gameText.style.display = 'block';
    isPlaying = false;
    clearInterval(timeInterval)
  }
}
function setGame(){
  isPlaying = true;
  time = 0;
  container.innerHTML = "";
  gameText.style.display = 'none'
  clearInterval(timeInterval)

  tiles = createImgTiles();
  tiles.forEach(tile => container.appendChild(tile))
  setTimeout(() => {
    container.innerHTML = "";
    shuffle(tiles).forEach(tile => container.appendChild(tile));
    timeInterval = setInterval(()=>{
      playTime.innerText = time;
      time++;
    },1000)
  },1000)
}
function createImgTiles(){
  const tempArray = [];
  Array(tileCount).fill().forEach((_,i) => {
    const li = document.createElement('li');
    li.setAttribute('data-index', i)
    li.setAttribute('draggable', 'true');
    li.classList.add(`list${i}`);
    tempArray.push(li)
  })
  return tempArray;
}
function shuffle(array) {
  let index = array.length -1;
  while(index > 0){
    const randomIndex = Math.floor(Math.random()*(index+1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
    index--;
  }
  return array;
}
//드래그 이벤트
container.addEventListener('dragstart', (e) => {
  if (!isPlaying) return;
  const obj = e.target
  dragged.el = e.target;
  dragged.class = e.target.className;
  dragged.index = [...e.target.parentNode.children].indexOf(e.target);
})
container.addEventListener('dragover', (e) => {
  e.preventDefault()
})
container.addEventListener('drop', (e) => {
  if (!isPlaying) return;
  const obj = e.target;
  if(obj.className !== dragged.class){
    let originPlace;
    let isLast = false;
  
    if(dragged.el.nextSibling){
      originPlace = dragged.el.nextSibling
    }else{
      originPlace = dragged.el.previousSibling
      isLast = true;
    }
    const droppeIndex = [...obj.parentNode.children].indexOf(obj);
    dragged.index > droppeIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    isLast ? originPlace.after(obj) : originPlace.before(obj)
  }
  checkStatus();
})
startButton.addEventListener('click', () =>{
  setGame();
})
