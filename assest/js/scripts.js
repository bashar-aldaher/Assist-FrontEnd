function showMobileNav() {
    var topNav = document.getElementById("topNav");
    if (topNav.className === "top-nav") {
        topNav.className += " nav-menu-mobile";
    } else {
        topNav.className = "top-nav";
    }
  }

  var toTopArrow = document.getElementsByClassName("to-top");
// toTopArrow[0].style.display='none'
// console.log(window.innerHeight)
window.onscroll = function(){
    let value = scrollY;
    // console.log(value)
    if(value>=800){
        toTopArrow[0].style.bottom='0px'
    }
    else{
        toTopArrow[0].style.bottom='-100px'
    }
}