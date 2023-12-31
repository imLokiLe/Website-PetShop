// scroll smooth
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({
        behavior: "smooth" // Để có hiệu ứng mượt mà, có thể sử dụng "auto" nếu không cần hiệu ứng
      });
    }
  }
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
  }, 1000); // Adjust the delay time as needed
});