const optionMenu = document.querySelector(".select-menu1"),
       selectBtn = optionMenu.querySelector(".select-btn1"),
       options = optionMenu.querySelectorAll(".option1"),
       sBtn_text = optionMenu.querySelector(".sBtn-text1");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption;

        optionMenu2.classList.remove("active");
    });
});

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