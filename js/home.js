// show video
function openModal() {
    document.getElementById('videoModal').style.display = 'block';
    document.getElementById('videoModal').style.animation = 'none';
  }

  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
  }

// rotate when scroll
window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Update the rotation of the image based on the scroll position
    const rotationValue = scrollPosition / 5; // Adjust the divisor for the rotation speed
    document.querySelector('.img_rotate').style.transform = `rotate(${rotationValue}deg)`;
  });

// home-slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    if (active == 0){
        items[active].style.display = 'block';
        items[1].style.display = 'none';
        items[2].style.display = 'none';
    }
    else if (active == 1){
        items[active].style.display = 'block';
        items[0].style.display = 'none';
        items[2].style.display = 'none';
    }
    else {
        items[active].style.display = 'block';
        items[0].style.display = 'none';
        items[1].style.display = 'none';
    }
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// home-blog
let blogs = document.querySelectorAll('.blog .blog_list .blog_content');
blogs.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1)";
        mask[0].style.display = "block";
        date[0].style.backgroundColor = "black";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1.15)";
        mask[0].style.display = "none";
        date[0].style.backgroundColor = "#fc591e";
    })
})

// home-moment
let moments = document.querySelectorAll('.moments .moments_wrapper .moment_item');
moments.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "#FF6B35";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1.1";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "whitesmoke";
    })
})

// home-question
let question = document.querySelectorAll('.question .question_content .question_item');
let content = document.querySelectorAll('.question .question_content .question_item p');
let check = document.querySelectorAll('.question .question_content .question_item .check');
question.forEach(function(element, idx){
    element.addEventListener('click', function(){
        content.forEach(function(item){
            item.style.display = 'none';
        })
        content[idx].style.display = 'block';
        
        check.forEach(function(item){
            item.style.backgroundColor = '#000';
        })
        check[idx].style.backgroundColor = '#fc591e';
       
    })
})

var popup = document.getElementById('popup');
function unshow() {
    window.location.href = '../Home.html';
}
let btn_complete = document.getElementById('btn_complete');
btn_complete.addEventListener('click', function(){
    popup.style.display = 'block';
})

// product-slider

let product_next = document.getElementById('highlight_next');
let product_prev = document.getElementById('highlight_prev');
let product_list = document.getElementById('highlight_list');

let currentIndex = 0;

function moveNext() {
    currentIndex = (currentIndex + 1) % 8; // Giả sử có 3 sản phẩm
    updateSlider();
}
function movePrev() {
    currentIndex = (currentIndex -1 + 8) % 8; // Giả sử có 3 sản phẩm
    updateSlider();
}

function updateSlider() {
    const translateValue = -currentIndex * (220 + 100); // Chiều rộng sản phẩm + khoảng cách giữa các sản phẩm
    product_list.style.transform = 'translateX(' + translateValue + 'px)';
}
product_next.addEventListener('click', moveNext);
product_prev.addEventListener('click', movePrev);

// scroll to top
let goTopBtn = document.querySelector('.go_top_btn');
window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if (window.scrollY > 200){
        goTopBtn.style.display = 'flex';
    }else{
        goTopBtn.style.display = 'none'
    }
}
goTopBtn.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// loading
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (you can remove this in production)
    setTimeout(function () {
        document.querySelector(".loading-overlay").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 3000); // Adjust the delay time as needed
});
