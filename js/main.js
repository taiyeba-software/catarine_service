// after scrolling effect for navbar :header scroll

let nav=document.querySelector(".navbar");

window.onscroll=function(){
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

//writing a js code for collapsing the nav after clicking nav menu

let navmenu=document.querySelectorAll(".nav-link");

let navCollapse=document.querySelector(".navbar-collapse.collapse");

navmenu.forEach(function(a) {
    a.addEventListener("click",function() {
        
        navCollapse.classList.remove("show");
    })    
})