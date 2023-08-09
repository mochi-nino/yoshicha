// nav換色
let navLink = document.getElementsByClassName("nav-link");
let navIcon = document.getElementsByClassName("navicon");
let navName = ["news", "about", "shop", "tea", "access", "qaz"];
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("mouseover", function () {
        navIcon[i].src = `img/${navName[i]}-org.png`;
    })
    navLink[i].addEventListener("mouseout", function () {
        navIcon[i].src = `img/${navName[i]}.png`
    })

}
// <!-- 購物車換色 -->
let cartI = document.getElementById("cart-i");
cartI.addEventListener("mouseover", function () {
    cartI.style.color = "#dd7335"
})
cartI.addEventListener("mouseout", function () {
    cartI.style.color = "#fff"
})

// 會員
let loginI = document.getElementById("login-i");
loginI.addEventListener("mouseover", function () {
    loginI.style.color = "#dd7335"
})
loginI.addEventListener("mouseout", function () {
    loginI.style.color = "#fff"
})


//to top

let pageTop = document.getElementById("page-top");


pageTop.addEventListener("click", function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


window.addEventListener("scroll", function () {
    if (window.innerWidth >= 768) {
        if (window.scrollY >= 400) {
            pageTop.style.display = 'block';
        } else {
            pageTop.style.display = 'none';
        }
    } else {
        pageTop.style.display = 'none';
    }
});



// 手機板

const hamburger = document.querySelector(".hamburger");
const mMenu = document.querySelector(".m-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mMenu.classList.toggle("active");

})

document.querySelectorAll(".m-link").forEach(function (n) {
    n.addEventListener("click", function () {
        hamburger.classList.remove("active");
        mMenu.classList.remove("active");
    })
})

