
$(function(){
    $("#custom-color_icon").delay(3500).click(function(){
        $("#custom-header").toggleClass("custom-header_color_remove");
        $("#custom-header").toggleClass("custom-header_color_active");
    });
   });
   $(function(){
    $("#custom-color_icon").click(function(){
        $("#logo-name_custom").toggleClass("custom-header_logo_remove");
        $("#logo-name_custom").toggleClass("custom-header_logo_active");
    });
   });


   $(function(){
    $("#custom-color_icon").click(function(){
        $("#header-icons_custom").toggleClass("custom-header_icons_remove");
        $("#header-icons_custom").toggleClass("custom-header_icons_active");
    });
   });

   $(function(){
    $("#custom-color_icon").click(function(){
        $("#header-icons_custom_cart").toggleClass("custom-header_icons_remove");
        $("#header-icons_custom_cart").toggleClass("custom-header_icons_active");
    });
   });
   
   $(function(){
    $("#custom-color_icon").click(function(){
        $("#header__heading-logo").toggleClass("white-header_logo_remove");
        $("#header__heading-logo-2").toggleClass("black-header_logo_remove");
    });
   });


   window.addEventListener("scroll", function(){
   var header = document.querySelector("#custom-header");
   header.classList.toggle("sticky-header", window.scrollY > 0);
   })
