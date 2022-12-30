


function mobileNav(){
    const element = document.getElementById("main-nav")
    const items = document.getElementsByClassName("nav-item")
    if ($("#main-nav").hasClass("mobile-nav")) {
        element.classList.remove("mobile-nav")
        for(var i = 0; i < items.length; i++){
            items[i].classList.remove("mobile-item")
        }
        return
    }
    console.log(items.length)
    for(var i = 0; i < items.length; i++){
        items[i].classList.add("mobile-item")
    }


    element.classList.add("mobile-nav");

}


window.onresize = function () {
    if(window.innerWidth >= 767){
        const element = document.getElementById("main-nav")
         const items = document.getElementsByClassName("nav-item")
        if ($("#main-nav").hasClass("mobile-nav")) {
            element.classList.remove("mobile-nav")
            for(var i = 0; i < items.length; i++){
                items[i].classList.remove("mobile-item")
            }
            return
        }
    }
}