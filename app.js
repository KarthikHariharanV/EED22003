var loader= document.getElementById("preloader")
window.addEventListener("load",function(){
    loader.style.display="none";
})


const items = document.querySelectorAll('.item');
let currentItemIndex = 0;


function showSlide(index) {

    items.forEach(item => {
        item.style.display = 'none';
    });

    items[index].style.display = 'block';
}


function nextSlide() {
    currentItemIndex++;
    if (currentItemIndex >= items.length) {
        currentItemIndex = 0;
    }
    showSlide(currentItemIndex);
}


function prevSlide() {
    currentItemIndex--;
    if (currentItemIndex < 0) {
        currentItemIndex = items.length - 1;
    }
    showSlide(currentItemIndex);
}

showSlide(currentItemIndex);


document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}
function changeImage() {
  var image = document.getElementById('myImage');
  
  if (image.src.match("on")) {
    image.src = "image/off.jpg";
  } else {
    image.src = "image/on.gif";
  }
}
function change() {
  var image = document.getElementById('vi');
  
  if (video.src.match("diode")) {
    image.src = "image/photodiode.jpg";
  } else {
    video.src = "image/diode.mp4";
  }
}
