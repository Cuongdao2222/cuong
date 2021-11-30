"use strict";function isGutenbergActive(){return"undefined"!=typeof wp&&void 0!==wp.blocks}jQuery(function($){isGutenbergActive()&&window._wpLoadBlockEditor.then(setTimeout(orionOwl,100)),!$("body").hasClass("one-page")||1<$('.site-header .nav-container a[href*="#"]:not([href="#"]):not([href*="="])').length&&$('.nav-container a[href*="#"]:not([href="#"]):not([href*="="])').parent().removeClass("current_page_item").removeClass("current-menu-item");var el,isMobile=!1,screenMedium=992,screenSmall=768;function dentalia_create_passepartout(){$("body").attr("data-passepartoutcolor")&&(window.matchMedia("(min-width: "+screenMedium+"px)").matches?function(){if(!$("body").hasClass("passepartout-propagated")){$("body").addClass("passepartout-propagated");var passepartoutHeight=$("body").data("passepartoutheight"),passepartoutWidth=$("body").data("passepartoutwidth"),passepartoutHex=$("body").data("passepartoutcolor");$("body").css({"margin-left":passepartoutWidth,"margin-right":passepartoutWidth,"margin-bottom":passepartoutHeight}),$(".passepartout-top").length||($("body").prepend('<div class="passepartout passepartout-top visible-md visible-lg"></div>'),$("body").append('<div class="passepartout passepartout-bottom visible-md visible-lg"></div>'),$("body").append('<div class="passepartout passepartout-left visible-md visible-lg"></div>'),$("body").append('<div class="passepartout passepartout-right visible-md visible-lg"></div>'),$("body > .passepartout-top").css({"background-color":passepartoutHex,height:passepartoutHeight}),$("body > .passepartout-bottom").css({"background-color":passepartoutHex,height:passepartoutHeight}),$("body > .passepartout-left").css({"background-color":passepartoutHex,width:passepartoutWidth}),$("body > .passepartout-right").css({"background-color":passepartoutHex,width:passepartoutWidth}))}}():($("body").css({"margin-left":"0","margin-right":"0"}),$("body").removeClass("passepartout-propagated")))}function removeSlowFade(){$(".main-nav-wrap .menu-item-has-children.slow-fade:not(:hover)").stop().removeClass("slow-fade")}function toggleMobileNav(){var button=$(".hamburger-box"),nav_menu=$("header:not(.stickymenu) .nav-container");if($("header .mobile-cart.open").length&&toggleMobileCart(),nav_menu.hasClass("open")){nav_menu.removeClass("open"),button.removeClass("open");var body=$("html, body");$("header.site-header").hasClass("mobile-header-sticky")||body.stop().animate({scrollTop:0},"400","swing",function(){})}else{$(".site-header .widget-section:not(.visible-md):not(.mobile-below-header) .header-widgets").length&&0<$(".header-widgets").children().length&&!$(".site-header .mobile-widgets").length&&($(".main-nav-wrap").append('<div class="mobile-widgets hidden-md hidden-lg"></div>'),$(".header-widgets").clone().appendTo(".main-nav-wrap .mobile-widgets")),nav_menu.addClass("open"),button.addClass("open");var $scrollValue=$(".hamburger-box").offset();body=$("html, body");$("header.site-header").hasClass("mobile-header-sticky")||body.stop().animate({scrollTop:$scrollValue.top-12},"700","swing",function(){})}}function stay_on_screen(){$(".site-navigation .sub-menu .sub-menu").parent().on("mouseenter",function(){if(!$(this).hasClass("orion-megamenu-subitem")){var menu=$(this).find("ul"),menupos=$(menu).offset(),siteWidth=$("body").innerWidth();if($("body").hasClass("boxed")&&(siteWidth=$(".boxed-container").width()+$(".boxed-container").offset().left),menupos.left+menu.width()>siteWidth){var newpos=-$(menu).width();menu.css({left:newpos})}if($("body").hasClass("rtl")&&menupos.left<0){newpos=-$(menu).width();menu.css({right:newpos})}}})}if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),dentalia_create_passepartout(),"undefined"!=$("body").attr("data-passepartoutcolor")&&$(window).on("resize",dentalia_create_passepartout),$.fn.toggleparent=function(){var element=$(this).parent("li");element.hasClass("open")?(element.find(".togglecontainer").stop().slideUp("100"),element.find("ul").stop().slideUp("300"),element.removeClass("open"),element.find("li").removeClass("open")):(element.stop(),element.parent("ul").stop().css("height","auto"),element.children("ul").stop().css("height","auto"),element.children(".togglecontainer").css("display","none"),element.children(".togglecontainer").removeClass("hidden"),element.children("ul, .togglecontainer").stop().slideDown("300"),$(window).trigger("resize"),element.addClass("open"))},$(".main-nav-wrap .menu-item-has-children").each(function(){$("li > a",this).prepend('<span class="coll_btn desktoponly"><i class="orionicon orionicon-arrow_right"></i></span>'),$("> a, li > span",this).after('<span class="coll_btn notdesktop"><i class="orionicon orionicon-arrow_carrot-down"></i></span>'),$("> a, li > span",this).addClass("needs_coll_btn")}),$(".main-nav-wrap .menu-item-has-children").on("mouseenter",function(){$(this).stop(),$(this).addClass("slow-fade")}),$(".main-nav-wrap .menu-item-has-children").on("mouseleave",function(){$(this).stop(),setTimeout(removeSlowFade,100)}),$(".orion-mega-menu span.coll_btn, .orion-megamenu .megamenu-sidebar .widget-area span.coll_btn").remove(),$(".orion-mega-menu .menu-item-has-children").each(function(){$("> a",this).removeClass("needs_coll_btn")}),$(".megamenu-sidebar .needs_coll_btn").removeClass("needs_coll_btn"),$(".orion-mega-menu .menu-item-has-children .sub-menu").each(function(){$(this).addClass("sub-mega-menu"),$(this).removeClass("sub-menu")}),$(".orion-mega-menu .menu-item-has-children").each(function(){$(this).addClass("menu-item-has-children-mega"),$(this).removeClass("menu-item-has-children")}),$(".nav-menu > .orion-megamenu").append('<span class="mega-indicator-wrap"></span>'),$(".coll_btn").on("click",function(){window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches&&$(this).toggleparent()}),$(".hamburger-box").on("click",toggleMobileNav),$(".widget_nav_menu .menu-item-has-children, .product-categories .cat-parent").each(function(){$("> a",this).after('<span class="coll_btn"><i class="orionicon orionicon-arrow_carrot-down"></i></span>')}),$(".widget_nav_menu .coll_btn").on("click",function(){$(this).toggleparent()}),$(".widget_product_categories .coll_btn").on("click",function(){$(this).toggleparent()}),$(".site-header .widget-section.mobile-below-header .header-widgets").length&&$(window).on("ready resize",function(){!$(".site-header .mobile-widgets").length&&$(".site-header .widget-section.mobile-below-header .header-widgets").length&&0<$(".header-widgets").children().length&&($(".site-header").append('<div class="mobile-widgets hidden-md hidden-lg widgets-below-header"></div>'),$(".header-widgets").clone().appendTo(".site-header .mobile-widgets"))}),window.matchMedia("(min-width: "+screenMedium+"px)").matches&&stay_on_screen(),$(".top-bar.collapsable").length&&($(".top-bar.collapsable").find(".top-bar-wrap.right").after('<div class="top-bar-toggle"> <span class="orionicon-icon_plus orionicon"></span> </div>'),$(".top-bar-toggle").on("click",function(){$(this).parents(".top-bar").toggleClass("on-screen")})),$(".search-toggle .search-box, .site-search .search-toggle").on("click",function(){$("search-opened").length||($(window).scrollTop(0),$(".site-search-input").focus()),$(".search-box").toggleClass("open"),$("body").toggleClass("search-opened")}),$.fn.getSize=function(){var $wrap=$("<div />").appendTo($("body"));$wrap.css({position:"absolute !important",visibility:"hidden !important",display:"block !important","max-height":"none"});$(this).clone().appendTo($wrap);$(window).trigger("resize");var sizes={width:this.width(),height:this.height()};return $wrap.remove(),sizes},$.fn.toggleWidgetContainer=function(){var el=$(this),elWidget=$(this),elBars=el.parents(".top-bar"),elTitle=el.find("> .widget-title"),elContainer=el.find(".togglecontainer"),elWrap=elContainer.find("div .panel-grid > div");elWidget.addClass("changeclass"),elBars.find('.so-widget-orion_mega_widget_topbar:not(".changeclass") > .widget-title').removeClass("active");var siblingsContainer=$('.so-widget-orion_mega_widget_topbar:not(".changeclass")> .togglecontainer.visible',elBars);if(siblingsContainer.length&&(siblingsContainer.addClass("fadeout"),setTimeout(function(){siblingsContainer.removeClass("visible"),siblingsContainer.removeClass("fadeout")},500)),elTitle.hasClass("active"))$(".closebar").addClass("evaporate"),elTitle.removeClass("active"),elWrap.css("max-height","0"),elContainer.addClass("remove-padding"),setTimeout(function(){elContainer.removeClass("visible"),elContainer.css("max-height","0"),elWrap.css("max-height","0"),$(".closebar").remove(),elContainer.removeClass("remove-padding")},300);else{elTitle.addClass("active"),elContainer.addClass("visible"),elWrap.css("max-height","none");var size=$("> div",elContainer).getSize();siblingsContainer.find($(".closebar")).addClass("evaporate");var height=size.height;elContainer.css("max-height","0"),elWrap.css("max-height","0"),setTimeout(function(){elWrap.css("visibility","visible"),elWrap.css("max-height",height),elContainer.css("max-height",height),$(window).trigger("resize")},100);elContainer.append('<div class="closebar x-box xtoarrows no-opacy"><div class="relative-wrap"><span class="first triangle"></span><span class="triangle last"></span></div></div>'),setTimeout(function(){elContainer.children($(".closebar")).removeClass("no-opacy"),$(".closebar.evaporate").remove()},100)}elWidget.removeClass("changeclass")},$(".orion-mega-menu.togglecontainer").parent(".menu-item").addClass("mega-menu-item"),$(el=".orion-mega-menu.togglecontainer").parent(".menu-item").on("mouseenter",function(){$(".togglecontainer",this).hasClass("hidden")&&window.matchMedia("(min-width: "+screenMedium+"px)").matches&&($(".togglecontainer",this).removeClass("hidden"),$(this).addClass("mega-active"),$(window).trigger("resize"))}),$(el).parent(".menu-item").on("mouseleave",function(){!$(".togglecontainer",this).hasClass("hidden")&&window.matchMedia("(min-width: "+screenMedium+"px)").matches&&$(".togglecontainer",this).addClass("hidden"),$(this).removeClass("mega-active")}),$(document).on("click",".closebar",function(){$(".closebar").parents(".so-widget-orion_mega_widget_topbar").toggleWidgetContainer(),$(this).addClass("evaporate")}),$(".so-widget-orion_mega_widget_topbar > .widget-title").on("click",function(){$(this).parents(".so-widget-orion_mega_widget_topbar").toggleWidgetContainer()}),$(".section").each(function(){$(this).css("background-color",$(this).attr("data-bgcolor"))}),window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches&&$(".section[data-mobile-bgcolor]").each(function(){$(this).css("background-color",$(this).attr("data-mobile-bgcolor"))}),$("body").data("passepartoutwidth"))var passpartoutWidth=$("body").data("passepartoutwidth");else passpartoutWidth="0";if($("body").hasClass("admin-bar"))var AdminBarHeight=32;else AdminBarHeight=0;function stickyAdjustWidth(){if($(".stickymenu").length)if(window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches);else if($(".stickymenu").css("width","100%"),$("body").data("passepartoutwidth")){var adjustWidth="-="+2*passpartoutWidth+"px";$(".stickymenu").css({width:adjustWidth})}}function setPostLinkHeight(){if($("body").hasClass("single-post")){var navheight=0;$(".post-navigation > .wrapper a").each(function(){$(".post-navigation > .wrapper a").removeAttr("style"),$(this).height()>navheight&&(navheight=$(this).height())}),$(".post-navigation > .wrapper a").css("min-height",navheight+64)}}function orionOwl(){jQuery.each($(".owl-carousel"),function(){var owl=$(this),childCount=$(".item",owl).length,number_items=1,number_items_desktop=4,owlAutoplay=!0,number_items_tablet=1,dots=!1,margin=0,owlAutoheight=!1,rtl="rtl"==$("html").attr("dir");"1"==owl.attr("data-dots")&&(dots=!0),!owl.attr("data-autoplay")||1!=("true"==owl.attr("data-autoplay")||"1"==owl.attr("data-autoplay"))&&(owlAutoplay=!1);if(owl.attr("data-autoheight"))owlAutoheight="true"==owl.attr("data-autoheight")||"1"==owl.attr("data-autoheight");owl.attr("data-margin")&&(margin=parseInt(owl.attr("data-margin"))),owl.attr("data-col")&&(number_items_desktop=parseInt(owl.attr("data-col"))),12==number_items_desktop?(number_items_tablet=3,number_items=6):6==number_items_desktop?number_items_tablet=number_items=3:number_items=4<number_items_desktop?4:number_items_desktop,number_items_desktop<6&&1<number_items_desktop&&(number_items_tablet=2),owl.attr("data-tablet")&&(number_items_tablet=owl.attr("data-tablet"));var owlLoop="true";owl.attr("data-owlloop")&&(owlLoop=owl.attr("data-owlloop"));var data_slideby=0,slideByDesktop=1,slideByItems=1,slideByTablet=1,autoplayTimeout=5e3;owl.attr("data-autoplaytimeout")&&(autoplayTimeout=parseInt(owl.attr("data-autoplaytimeout"))),owl.attr("data-slideby")&&(data_slideby=parseInt(owl.attr("data-slideby"))),slideByDesktop=childCount/2<number_items_desktop?1:0!=data_slideby&&data_slideby<=number_items_desktop?data_slideby:number_items_desktop,slideByItems=childCount/2<number_items?1:0!=data_slideby&&data_slideby<=number_items?data_slideby:number_items,slideByTablet=childCount/2<number_items_tablet?1:0!=data_slideby&&data_slideby<=number_items_tablet?data_slideby:number_items_tablet;var hashListner=!1;if(owl.attr("data-hashlisten"))hashListner=owl.attr("data-hashlisten");var isloop="true"==owlLoop;if(owl.owlCarousel({rtl:rtl,loop:isloop,URLhashListener:hashListner,startPosition:"URLHash",animateOut:"fadeOut",autoplay:owlAutoplay,autoplayHoverPause:!0,autoplaySpeed:500,autoplayTimeout:autoplayTimeout,responsiveClass:!0,autoHeight:owlAutoheight,dots:dots,margin:margin,responsive:{0:{items:1,nav:!1,slideBy:1},600:{items:number_items_tablet,nav:!1,slideBy:slideByTablet},992:{items:number_items,nav:!1,slideBy:slideByItems},1200:{items:number_items_desktop,nav:!1,slideBy:slideByDesktop}}}),owl.hasClass("owl-equal-height")&&(function($carousel){$(".owl-item",$carousel).each(function(){var $this=$(this),$image=$this.find("img"),imageSource=$image.attr("src");$this.css("backgroundImage","url("+imageSource+")")})}(owl),function($carousel){var minratio=$carousel.data("minratio"),owlWidth=$carousel.innerWidth(),owlHeight=parseInt(owlWidth*minratio);$carousel.height(owlHeight),$(".owl-item",$carousel).height(owlHeight)}(owl)),owl.hasClass("owl-correct-height")&&function($carousel){setTimeout(function(){var slideHeight=$("> .owl-stage-outer > .owl-stage > .owl-item.active",$carousel).outerHeight();$("> .owl-stage-outer",$carousel).height(slideHeight)},1e3)}(owl),owl.on("changed.owl.carousel",function(event){var urlHash=window.location.hash;if(""!=urlHash){var dataSearchQuery=urlHash.replace("#",""),navTab=$(".carousel-navigation a[data-navid="+dataSearchQuery+"]").parent("li");navTab.addClass("active"),navTab.siblings().removeClass("active"),history.replaceState(null,null," ")}}),1==owlAutoplay){$(owl).on("mouseleave",function(){owl.trigger("play.owl.autoplay")}),$(owl).on("mouseenter",function(){owl.trigger("stop.owl.autoplay")});var navlinks=$(owl).closest(".so-panel.widget").find(".owl-nav-link");navlinks.length&&(navlinks.on("mouseenter",function(){owl.trigger("stop.owl.autoplay")}),navlinks.on("mouseleave",function(){owl.trigger("play.owl.autoplay")}))}owl.siblings().find(".owlnext").on("click",function(){owl.trigger("next.owl.carousel")}),owl.siblings().find(".owlprev").on("click",function(){owl.trigger("prev.owl.carousel")})})}$(".stickymenu").css("top",AdminBarHeight),$(".site-header").hasClass("mobile-header-sticky")&&$(window).on("ready resize scroll",function(){if(window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches){var calculatedTopBarHeight=0;$(".top-bar:not(.collapsable)").length&&(calculatedTopBarHeight=$(".top-bar").height());var stickyHeaderHeight=$(".site-header.mobile-header-sticky").height();102<stickyHeaderHeight&&(stickyHeaderHeight=102);var windowScroll=$(window).scrollTop(),wpadminbar=0;$("#wpadminbar").length&&(wpadminbar=$("#wpadminbar").height());var stickyReadyOffset=calculatedTopBarHeight+stickyHeaderHeight+wpadminbar,stickyOffset=calculatedTopBarHeight+2*stickyHeaderHeight+wpadminbar;$(".site-header .nav-container:not(.open)").length&&(stickyReadyOffset<windowScroll?$(".site-header.mobile-header-sticky").addClass("stuck_ready"):$(".site-header.mobile-header-sticky").removeClass("stuck_ready"),stickyOffset<windowScroll?($(".site-header.mobile-header-sticky").addClass("stuck"),$("body > .site").css("padding-top",stickyHeaderHeight),$(".site-header.mobile-header-sticky").removeClass("stuck_ready")):($(".site-header.mobile-header-sticky").removeClass("stuck"),$("body > .site").css("padding-top","")))}else $("body > .site").css("padding-top","")}),$(function(){if($(".stickynav").length&&"function"==typeof Waypoint){var orionSticky=$(".stickynav"),stickyOffset=orionSticky.offset(),stickyHeight=orionSticky.height();new Waypoint({element:$("body"),handler:function(direction){if(window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches)return $(".stickymenu").addClass("hidesticky"),void $(".stickymenu").removeClass("stuck");"down"==direction&&($(".stickymenu").addClass("stuck"),$(".stickymenu").removeClass("hidesticky"),stickyAdjustWidth())},offset:-(stickyOffset.top-2*AdminBarHeight+stickyHeight)}),new Waypoint({element:$("body"),handler:function(direction){window.matchMedia("(max-width: "+(screenMedium-1)+"px)").matches||"up"==direction&&($(".stickymenu").addClass("hidesticky"),$(".stickymenu").removeClass("stuck"),$(".stickymenu .togglecontainer").addClass("hidden"))},offset:-(stickyOffset.top-2*AdminBarHeight-30+stickyHeight/2)})}}),$(setPostLinkHeight),$(window).on("ready resize",function(){var headerNotTransparentHeight=0,topBarheight=0,adminBarHeight=0;$(".full-screen-row").parent(".panel-grid").is(":first-child")&&($(".full-screen-row").parent(".panel-grid").addClass("panel-grid-first-child"),$(".site-header:not(.header-transparent)").height&&(headerNotTransparentHeight=$(".site-header:not(.header-transparent)").height()),$(".top-bar").height&&(topBarheight=$(".top-bar").height()),$("#wpadminbar").height&&(adminBarHeight=$("#wpadminbar").height()));var fullScreenRow=$(".panel-grid:not(.panel-grid-first-child) .full-screen-row"),fullScreenFirstRow=$(".panel-grid.panel-grid-first-child .full-screen-row");if(window.matchMedia("(min-width: "+screenMedium+"px)").matches){var windowHeight=$(window).height(),firstchildHeight=windowHeight-headerNotTransparentHeight-topBarheight-adminBarHeight;$(fullScreenFirstRow).stop().animate({"min-height":firstchildHeight}),$(fullScreenRow).stop().animate({"min-height":windowHeight})}else $(fullScreenRow).stop().css("min-height",""),$(fullScreenFirstRow).stop().css("min-height","")}),$(".widget_orion_features_w .feature-item-wrap:not(.no-toggle)").on("mouseenter",function(){$(".footer",this).stop().slideDown({duration:100,easing:"swing"}).addClass("visible")}),$(".widget_orion_features_w .feature-item-wrap:not(.no-toggle)").on("mouseleave",function(){997<$("body").width()&&$(".footer",this).stop().slideUp({duration:200,easing:"swing"}).removeClass("visible")}),$(orionOwl),$(".so-widget-orion_advanced_carousel_w .widget_orion_accordion_w .panel-heading").on("click",function(){$(".so-widget-orion_advanced_carousel_w .owl-stage-outer").css("height","")});function updatePosition(){$(".orion-parallax").each(function(){var para_position=$(this).offset().top,el_height=$(this).outerHeight(),screen_height=$(window).height(),para_bg_percent=100/(el_height+screen_height)*(window.pageYOffset+screen_height-para_position);$(this).hasClass("vertical_down")?$(this).css("background-position","50% "+para_bg_percent+"%"):$(this).hasClass("vertical_up")?$(this).css("background-position","50% "+(100-para_bg_percent)+"%"):$(this).hasClass("horizontal_left")?$(this).css("background-position",para_bg_percent+"%"):$(this).hasClass("horizontal_right")&&$(this).css("background-position",100-para_bg_percent+"%")})}if(updatePosition(),$(window).on("load",function(){if(0<$(".orion-parallax").length)new Waypoint.Inview({element:$(".orion-parallax")[0],enter:function(direction){"down"==direction&&window.addEventListener("scroll",updatePosition,!1)},entered:function(direction){},exit:function(direction){},exited:function(direction){}})}),$(".orioninner").wrapAll("<div class='row' />"),$(window).on("resize",function(){stickyAdjustWidth(),setPostLinkHeight(),window.matchMedia("(min-width: "+screenMedium+"px)").matches&&stay_on_screen()}),$(".so-widget-sow-google-map").length&&$(window).on("resize",function(){"function"==typeof soGoogleMapInitialize&&soGoogleMapInitialize()}),$(window).on("load",function(){$(window).trigger("resize")}),$(".tabs-wrap > ul").tabCollapse(),$(function(){$("a[href]").filter(function(){return/(\.jpg|\.jpeg|\.gif|\.png)/i.test($(this).attr("href"))}).addClass("fancybox"),$("a.fancybox").filter(function(){if($(this).find("img").attr("title"))var title_img=$(this).find("img").attr("title");else title_img=$(this).find("img").attr("alt");$(this).attr("title")||$(this).attr("title",title_img)}),$(".fancybox").fancybox({})}),$(function(){$("[data-imgsize]").each(function(){var el=$(this),imgSize=el.attr("data-imgsize")+"%";void 0!==(imgHoverSize=el.attr("data-imghoversize"))&&!1!==imgHoverSize?imgHoverSize+="%":imgHoverSize=imgSize;var imgHoverSize=el.attr("data-imghoversize")+"%";$("> img",el).css({"max-width":imgSize,"max-height":imgSize}),el.on("mouseenter",function(){$("> img",el).css({"max-width":imgHoverSize,"max-height":imgHoverSize})}),el.on("mouseleave",function(){$("> img",el).css({"max-width":imgSize,"max-height":imgSize})})})}),$(".back-to-top").on("click",function(){return $("html,body").animate({scrollTop:0},600),!1}),$(window).on("load scroll resize",function(){var button=$(".back-to-top");800<$(window).scrollTop()?button.removeClass("hideit"):button.addClass("hideit")}),window.onload=function(){if($(".fixed-footer").length&&window.matchMedia("(min-width: "+screenMedium+"px)").matches){var footerSize=$(".site-footer").height();0<footerSize&&($(".site-footer").addClass("fixed"),$("body").css("margin-bottom",footerSize))}},$(".btn-download").on("click",function(){$(this).addClass("visited")}),$(".overlay-dark").prepend('<div class="overlay-dark-wrapper"></div>'),$(".overlay-light").prepend('<div class="overlay-light-wrapper"></div>'),$(".overlay-c1").prepend('<div class="overlay-c1-wrapper"></div>'),$(".overlay-c2").prepend('<div class="overlay-c2-wrapper"></div>'),$(".overlay-c3").prepend('<div class="overlay-c3-wrapper"></div>'),$(".overlay-c1-c2").prepend('<div class="overlay-c1-c2-wrapper"></div>'),$(".overlay-c2-c1").prepend('<div class="overlay-c2-c1-wrapper"></div>'),$(".overlay-c1-t").prepend('<div class="overlay-c1-t-wrapper"></div>'),$(".overlay-c2-t").prepend('<div class="overlay-c2-t-wrapper"></div>'),$(".overlay-c3-t").prepend('<div class="overlay-c3-t-wrapper"></div>'),$(".overlay-black2trans").prepend('<div class="overlay-black2trans-wrapper"></div>'),$(".overlay-fade-black").prepend('<div class="overlay-fade-black-wrapper"></div>'),$(".overlay-white-t").prepend('<div class="overlay-white-t-wrapper"></div>'),$(".overlay-fade-light").prepend('<div class="overlay-fade-light-wrapper"></div>'),$(".shadow-2").parent().addClass("relative no-bottom-margins"),$(".shadow-2").parent().prepend('<div class="shadow-2-left-wrap"></div>'),$(".shadow-2").parent().prepend('<div class="shadow-2-right-wrap"></div>'),$(".shadow-3").parent().addClass("relative no-bottom-margins"),$(".shadow-3").parent().prepend('<div class="shadow-3-left-wrap"></div>'),$(".shadow-3").parent().prepend('<div class="shadow-3-right-wrap"></div>'),$(".orion.absolute-bottom").each(function(){var parentRow=$(this).parents(".panel-row-style:not([data-z-index])");parentRow.css("z-index","2"),setTimeout(function(){parentRow.siblings(".svg-wrap").css("z-index","3")},100),setTimeout(function(){parentRow.siblings(".svg-wrap").css("z-index","3")},600)}),$(document).on("focus",".wpcf7-not-valid",function(){$(this).siblings(".wpcf7-not-valid-tip").css("opacity",0)}),$(".woocommerce-review-link").on("click",function(){window.matchMedia("(min-width: "+screenSmall+"px)").matches?$('.nav-tabs a[area-controls="tab-reviews"]').tab("show"):$(".panel-group #tab-reviews-collapse").collapse("show")}),$(function(){function scrollnow(e){if(e){if(!$(this).hasClass("owl-nav-link")&&!$(this).hasClass("comment-reply-link")){var noHashTarget=(target=this.hash).replace("#","");$(' div[data-hash="'+noHashTarget+'"').length||($(this).parent().hasClass("menu-item")?(e.preventDefault(),history.replaceState(void 0,void 0,target)):($("#"+noHashTarget).length&&$('.nav-tabs a[href="'+target+'"]').tab("show"),e.preventDefault()))}var target=this.hash}else target=location.hash;var offset=0;$("#wpadminbar").length&&(offset-=$("#wpadminbar").height()),$(".stickymenu").length&&(offset-=$(".stickymenu").height()),$(target).hasClass("tab-pane")||$(target).hasClass("panel-collapse")||$(this).hasClass("owl-nav-link")||$(this).hasClass("comment-reply-link")||$.smoothScroll({offset:offset,scrollTarget:target,easing:"swing",speed:800})}location.hash&&($("html, body").scrollTop(0).show(),scrollnow()),$('a[href*="/"][href*="#"]').each(function(){this.pathname.replace(/^\//,"")==location.pathname.replace(/^\//,"")&&this.hostname==location.hostname&&$(this).attr("href",this.hash)}),$('a[href^="#"]:not([href="#"])').on("click",scrollnow),location.hash&&setTimeout(scrollnow,800)}),$("body").hasClass("one-page")){var navLinkIDs="";if($('.nav-container a[href*="#"]:not([href="#"]):not([href*="="])').each(function(index){""!=navLinkIDs&&(navLinkIDs+=", ");var temp=$('.nav-container a[href*="#"]:not([href="#"]):not([href*="="])').eq(index).attr("href").split("#");navLinkIDs+="#"+temp[1]}),navLinkIDs){var offset=$(".stickymenu").height()+40;$(".wpadminbar").length&&(offset+=".wpadminbar".height()),$(navLinkIDs).waypoint(function(direction){var link_id=".nav-container .menu-item a[href*='#"+$(this.element).attr("id")+"']";"down"==direction&&($(".nav-container .menu-item a").parent().removeClass("one-page-current-item"),$(link_id).parent().addClass("one-page-current-item"),$(".one-page-current-anchester").removeClass("one-page-current-anchester"),$(link_id).parents(".menu-item").parents(".menu-item").addClass("one-page-current-anchester"))},{offset:offset}),$(navLinkIDs).waypoint(function(direction){var link_id=".nav-container a[href*='#"+$(this.element).attr("id")+"']";"up"==direction&&($(".nav-container a").parent().removeClass("one-page-current-item"),$(link_id).parent().addClass("one-page-current-item"),$(".one-page-current-anchester").removeClass("one-page-current-anchester"),$(link_id).parents(".menu-item").parents(".menu-item").addClass("one-page-current-anchester"))},{offset:function(){return-$(this.element).closest(".panel-grid").height()+offset}})}}function toggleMobileCart(){var button=$(".to-x .woocart");$(".to-x .woocart").length&&0<$(".to-x .woocart .product_list_widget").children().length&&!$(".site-header .mobile-cart").length&&($(".mainheader .nav-container").after('<div class="mobile-cart hidden-md hidden-lg"></div>'),$(".to-x .woocart .orion-cart-wrapper").clone().appendTo(".mainheader .mobile-cart"));var mobile_cart=$(".mainheader .mobile-cart");if($("header .nav-container.open").length&&toggleMobileNav(),mobile_cart.hasClass("open")){mobile_cart.removeClass("open"),button.removeClass("open"),$("html, body").stop().animate({scrollTop:0},"400","swing",function(){})}else{mobile_cart.addClass("open"),button.addClass("open");var $scrollValue=$(".hamburger-box").offset();$("html, body").stop().animate({scrollTop:$scrollValue.top-12},"700","swing",function(){})}}$(".orion-megamenu > .sub-menu").addClass("row"),$(".orion-megamenu > .mega-light").addClass("nav-light").addClass("text-light"),$(".orion-megamenu > .mega-dark").addClass("nav-dark").addClass("text-dark"),$(".header-transparent").length&&$(".page-heading").length&&($(function(){var headerHeight=$(".header-transparent").height();$(".page-heading").prepend('<div class="visible-md visible-lg header-space" style="height:'+headerHeight+'px"></div>')}),$(window).on("resize",function(){var headerHeight=$(".header-transparent").height();$(".header-space").css("height",headerHeight)})),$(window).on("load",function(){$(".so-widget-orion_custom_menu_w .current-menu-ancestor").addClass("open"),$(".so-widget-orion_custom_menu_w .current-menu-ancestor > .sub-menu").css("display","block"),$(".so-widget-orion_custom_menu_w .current-menu-item.menu-item-has-children").addClass("open"),$(".so-widget-orion_custom_menu_w .current-menu-item.menu-item-has-children").children(".sub-menu").css("display","block"),$(".widget_product_categories .current-cat-parent ").addClass("open"),$(".widget_product_categories .current-cat ").addClass("open"),$(".widget_product_categories .current-cat-parent").children(".children").css("display","block"),$(".widget_product_categories .current-cat").children(".children").css("display","block")}),1==isMobile&&window.matchMedia("(min-width: "+screenMedium+"px)").matches&&$(".menu-item-has-children > a").on("click",function(){if(!$(this).hasClass("tablet-mode"))return $(this).addClass("tablet-mode"),!1;$(this).removeClass("tablet-mode"),window.location=this.href}),"function"==typeof datepicker&&$('input[type="date"]').datepicker({dateFormat:"yy-mm-dd",minDate:new Date($(this).attr("min")),maxDate:new Date($(this).attr("max"))}).attr("type","text"),$(window).on("ready resize",function(){$(".row-divide").each(function(){if(window.matchMedia("(min-width: "+screenSmall+"px)").matches)if($(this).hasClass("svg-wrap")){var rowDivideHeight=$(this).next(".row-divide").outerHeight(),setMarginTop=-rowDivideHeight/2;$(this).stop().animate({marginTop:setMarginTop,marginBottom:-setMarginTop,zIndex:2},50)}else{var rowDivideHeight=$(this).outerHeight(),setMarginTop=-rowDivideHeight/2;$(this).stop().animate({marginTop:setMarginTop},50)}else $(".row-divide").css("marginTop","")}),$(".push-up-row").each(function(){if(window.matchMedia("(min-width: "+screenMedium+"px)").matches)if($(this).hasClass("svg-wrap")){var rowDivideHeight=$(this).next(".push-up-row").outerHeight(),setMarginTop=-rowDivideHeight;$(this).stop().animate({marginTop:setMarginTop,marginBottom:-setMarginTop,zIndex:2},1)}else{$(this).addClass("set-height"),$(this).css("display","flex"),$(this).css("opacity","1");var rowDivideHeight=$(this).outerHeight(),setMarginTop=-rowDivideHeight;$(this).stop().animate({marginTop:setMarginTop},1)}else $(".push-up-row").css("marginTop","")})}),$(".burger-container .woocart").on("click",function(){toggleMobileCart()}),$(".widget_layered_nav > select").wrap('<div class="selectwrapper"></div>'),$("select.pwb-dropdown-widget").wrap('<div class="selectwrapper"></div>'),$(".widget_sow-google-map .panel-widget-style").css("overflow","hidden"),$(function(){""!=window.location.hash&&($('.nav-tabs a[href="'+window.location.hash+'"]').tab("show"),$('.owl-nav-link[href="'+window.location.hash+'"]').parent("li").siblings("li.active").removeClass("active"),$('.owl-nav-link[href="'+window.location.hash+'"]').parent("li").addClass("active"))})});