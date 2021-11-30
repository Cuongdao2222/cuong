$(window).ready(function () {
    var interval = setInterval(function () {
        if (window.location.hash) window.location = window.location.hash;
    }, 0);
    setTimeout(function () {
        clearInterval(interval);
    }, 1000);

    function scrollToAnchor(target) {
        var $target = $("a[name='" + target.substr(1) + "']"),
            targetName = window.location.href.split("#")[1];
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, function () {
            document.location.hash = targetName;
        });
    }
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {});
            }
        }
    });
});


$(function() {



    $('header nav').meanmenu({
        meanMenuContainer: 'header .place-nav',
        meanMenuOpen: "<i class='icon-menu'></i>",
        meanMenuClose: "<i class='icon-plus'></i>",
        meanScreenWidth: 860,
        meanDisplay: "block"
    });
    $("main > h1:first-child, h2#append").appendTo($("#inner-banner .container"));
    var theWindow = $(window),
        body = $("body"),
        header = $("header"),
        headerBottom = header.outerHeight(),
        hideBottom = $("header article").outerHeight();
    $(window).resize(function() {
        body.css('padding-top', header.outerHeight());
    });
    body.css('padding-top', headerBottom);
    if (window.location.hash && theWindow.width() > 999) {
        body.addClass("scrolled");
        header.addClass("animated fadeInDown");
    }

    theWindow.on("scroll", function() {
        if (theWindow.width() > 999) {
            if (theWindow.scrollTop() >= headerBottom) {
                body.addClass("scrolled").removeClass("not-scrolled");
                header.addClass("animated fadeInDown");
            } else if (theWindow.scrollTop() <= headerBottom) {
                body.removeClass("scrolled").addClass("not-scrolled");
                header.removeClass("animated fadeInDown");
            }
        }
        if (theWindow.width() < 861) {
            if (theWindow.scrollTop() >= hideBottom) {
                body.addClass('attach');
            } else if (theWindow.scrollTop() <= hideBottom) {
                body.removeClass('attach');
            }
        }
    });
    $(".hover-change").on("mouseover", function() {
        var $this = $(this);
        $this.data("original", $this.attr("src"));
        $this.attr("src", $this.data("hover"));
    }).on("mouseleave", function() {
        var $this = $(this);
        $this.data("hover", $this.attr("src"));
        $this.attr("src", $this.data("original"));
    });
    $("#faqs>h2").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next("div").slideUp().removeClass("active-div");
        } else {
            $("#faqs>h2").removeClass("active").next("div").slideUp();
            $(this).addClass("active").next("div").slideDown().addClass("active-div");
        }
    });


    if (theWindow.width() >= "800") {
        $(".services-rotation").cycle({
            slides: ">div",
            pager: "#services-nav",
            paused: "true",
            timeout: "0",
            pagerTemplate: ""
        })
    } else {
        var rotSlides = $(".services-rotation > div");
        for (var i = 0; i < rotSlides.length; i++) {
            var rotSlide = rotSlides[i],
                rotNavItem = $("#services-nav li");
            $(rotSlide).appendTo(rotNavItem[i]);
        }
        $("#services-nav li").on("click", ">a", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").next().slideUp();
            } else {
                $("#services-nav li > a").removeClass("active").next().slideUp();
                $(this).addClass("active").next().slideDown();
            }
            return false;
        });
    }
    if (theWindow.width() >= "1030") {
        $(".reviews-rotation").cycle({
            slides: ">div",
            fx: "carousel",
            carouselVisible: "3",
            carouselFluid: true,
            pager: ".reviews-pager",
            prev: "#section-reviews .prev",
            next: "#section-reviews .next",
            timeout: "10000",
            pagerTemplate: "<span></span>"
        })
    } else {
        $(".reviews-rotation").cycle({
            slides: ">div",
            fx: "scrollHorz",
            autoHeight: "calc",
            pager: ".reviews-pager",
            prev: "#section-reviews .prev",
            next: "#section-reviews .next",
            timeout: "10000",
            pagerTemplate: "<span></span>"
        })
    }
    var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function(e, opts) {
        slideshows.not(this).cycle('goto', opts.currSlide);
    });
    $('#carousel .cycle-slideshow figure').click(function() {
        console.log("clicked");
        var index = $('#carousel .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });



    ////////////////////////////// page divider
    var dividerStart = "> h2, .page-divider .wrap, .page-divider .title",
        mobileWidth = 630;
    $.when(setupServices()).done(function () {});

    function setupServices() {
        $(".page-divider " + dividerStart)
            .addClass("divider-title").each(function () { //auto wrap 
                $(this)
                    .nextUntil('.divider-title')
                    .addBack()
                    .wrapAll('<div class="divider-body clearfix">');
            });

            //if has image
            $(".divider-body").each(function() { 
              $(this).find(".divider-title + p:has(img)").addClass("has-img");
              $(this)
                .children(".has-img")
                .insertBefore($(this)
                .children(".divider-title")
                .first());
            });


            $(".page-divider .divider-body h2 + ul:nth-child(-n+2)").parent().attr('id', 'why');
            $("#why li").each(function(){
              $(this).wrapInner("<span>");
            });

            
            $(this)
              .children(".divider-title")
              .nextAll()
              .wrapAll('<div class="clearfix">');

              //move anchors to page-divider-body
              $(".page-divider a[name]").each(function(){              
              var getAnchor = $(this).parent(),
                anchorTarget = $(this)
                  .parentsUntil(".page-divider")
                  .next()
                  .find(".divider-title").parent();
                getAnchor.prependTo(anchorTarget);
              });   
            } 
});



!function(e){e.fn.extend({leanModal:function(a){var o=e("<div id='lean_overlay'></div>");return e("body").append(o),a=e.extend({top:"0",overlay:"rgba(0,0,0,0)",closeButton:".modal-close"},a),this.each(function(){var o=a;e(this).click(function(a){e("body").css({overflow:"hidden"});var n=e(this).attr("href");e(o.closeButton).click(function(){!function(a){e("#lean_overlay").fadeOut(200),e("body").css({overflow:"visible"}),e(a).css({display:"none"});var o=e("#lean_overlay iframe"),n=o.attr("src");o.attr("src",""),o.attr("src",n)}(n)});e(n).outerHeight(),e(n).outerWidth();e("#lean_overlay").css({display:"flex",background:"rgba(0,0,0,.7)"}),e("#lean_overlay").fadeTo(200,o.overlay),e(n).appendTo("#lean_overlay").css({display:"block","z-index":1001,opacity:0}),e(n).fadeTo(200,1),a.preventDefault()})})}})}(jQuery);

$(function() {
  $("a[rel*=leanModal]").leanModal();
});



 //section accordion
    $(".section-toggle>p").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next("div").slideUp();
        } else {
            $(this).addClass("active").next("div").slideDown();
        }
    });




/* Diabetes Health Tab Content */
$(document).ready(function(){
  var theWindow = $(window);

  if (theWindow.width() > 1000) {
  // Variables
  var clickedTab = $(".tabs > .active");
  var tabWrapper = $(".tab__content");
  var activeTab = tabWrapper.find(".active");
  var activeTabHeight = activeTab.outerHeight();
  
  // Show tab on page load
  activeTab.show();
  
  // Set height of wrapper on page load
  tabWrapper.height(activeTabHeight);
  
  $(".tabs > li").on("click", function() {
      
      // Remove class from active tab
      $(".tabs > li").removeClass("active");
      
      // Add class active to clicked tab
      $(this).addClass("active");
      
      // Update clickedTab variable
      clickedTab = $(".tabs .active");
      
      // fade out active tab
      activeTab.fadeOut(250, function() {
          
          // Remove active class all tabs
          $(".tab__content > li").removeClass("active");
          
          // Get index of clicked tab
          var clickedTabIndex = clickedTab.index();

          // Add class active to corresponding tab
          $(".tab__content > li").eq(clickedTabIndex).addClass("active");
          
          // update new active tab
          activeTab = $(".tab__content > .active");
          
          // Update variable
          activeTabHeight = activeTab.outerHeight();
          
          // Animate height of wrapper to new tab height
          tabWrapper.stop().delay(5).animate({
              height: activeTabHeight
          }, 300, function() {
              
              // Fade in active tab
              activeTab.delay(5).fadeIn(50);
              
          });
      });
  });

}

if (theWindow.width() < 1000) {
          ////////////////////////////// FAQ / Accordion
      
          $(".tab-mobile-title").on("click", function () {
              if ($(this).hasClass("active")) {
                  $(this).removeClass("active").next().slideUp();
              } else {
                  $(".tab-mobile-title").removeClass("active").next().slideUp();
                  $(this).addClass("active").next().slideDown();
              }
          });
}
});
