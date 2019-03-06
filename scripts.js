$(document).ready(function(){

  $(window).on("load",function() {
      //fade
      $(window).scroll(function() {
          let windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".fade").each(function() {
            /* Check the location of each desired element */
            let objectCenter = $(this).offset().top + ($(this).outerHeight())/2;
            /* If the element is completely within bounds of the window, fade it in */
            if (objectCenter < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(600,1);}
            }
            // } else { //object goes out of view (scrolling up)
            //   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            // }
          });
        }).scroll(); //invoke scroll-handler on page-load

    });


    let fixedbgPos = $(".fixed-bg").position().top - $(".navbar").outerHeight();
    let aboutPos = $(".about").position().top - $(".navbar").outerHeight();
    let fixedbg2Pos = $(".fixed-bg2").position().top - $(".navbar").outerHeight();
    let projectsPos = $(".projects").position().top - $(".navbar").outerHeight();
    let connectPos = $(".connect").position().top - $(".navbar").outerHeight();

    $(function(){
      $(".intro").css("left", $(window).innerWidth()/2-$(".intro").outerWidth()/2);
    });

    //need this to be triggered when page starts

    $(window).resize(function () {
      fixedbgPos = $(".fixed-bg").position().top - $(".navbar").outerHeight();
      aboutPos = $(".about").position().top - $(".navbar").outerHeight();
      fixedbg2Pos = $(".fixed-bg2").position().top - $(".navbar").outerHeight();
      projectsPos = $(".projects").position().top - $(".navbar").outerHeight();
      connectPos = $(".connect").position().top - $(".navbar").outerHeight();

      $(".intro").css("left", $(window).innerWidth()/2-$(".intro").outerWidth()/2);
      //when button beside exit window clicked, this isn't triggered
    });
    //if navbar is sticky, include - navbar height

    $("a[href='#']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });

    $("a[href='#about']").click(function() {
      $("html, body").animate({ scrollTop: aboutPos}, 1500);
      return false;
    });

    $("a[href='#projects']").click(function() {
      $("html, body").animate({ scrollTop: projectsPos}, 1500);
      return false;
    });

    $("a[href='#connect']").click(function() {
      $("html, body").animate({ scrollTop: connectPos}, 1500);
      return false;
    });

});
