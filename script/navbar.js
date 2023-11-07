function toggleMenu() {

   if (window.matchMedia("(max-width: 900px)").matches) {
      let activeNavHeight = document.getElementById("inside_nav").offsetHeight;

      switch(activeNavHeight)
      {
         case 50:    
            document.getElementById("inside_nav").style.height = "350px";
            document.getElementById("nav_ul").style.display = "flex";
            document.getElementById("nav_ul").style.height = "300px";
            document.getElementById("menubutton").src = "./img/nav/menuclose.svg";
            break;
   
         case 350:   
            document.getElementById("inside_nav").style.height = "50px";
            document.getElementById("nav_ul").style.display = "none";
            document.getElementById("menubutton").src = "./img/nav/menuburger.svg";
            break;
   
         default:    
            break;
      }
   }

}