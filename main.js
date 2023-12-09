let data = new Date();
let year = data.getFullYear();
document.querySelector("footer .copy_right span").innerHTML = year;


let a = document.querySelectorAll(".nav-link");
a.forEach(function(e){
    e.onclick = function(){
        a.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")

    }
})


let moon = document.querySelector("nav .container i");
let section = document.querySelector("section");
let nav = document.querySelector("nav");
let footer = document.querySelector("footer");

moon.onclick = function(){
    this.classList.toggle("fa-moon");
    this.classList.toggle("fa-sun");
    this.classList.toggle("rotate");
    // this.classList.toggle("scale");
    if(this.classList.contains("fa-sun")){
        section.classList.add("dark");
        nav.classList.add("dark");
        moon.style.color = "orange"
    }else{
        section.classList.remove("dark");
        nav.classList.remove("dark");
        moon.style.color = "#18a3a8"
    };
};

window.onscroll = function(){
    if(scrollY > 0){
        nav.style.boxShadow = "5px 5px 10px 0 gray"
    }else{
        nav.style.boxShadow = "none"

    }
}
