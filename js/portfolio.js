$(document).ready(function () {

  /* ________________스크롤________________ */
  $(window).scroll(function () {
    $("#txt1").text($(this).scrollTop());
  });


  /* ________________상단팝업________________ */
  $(".bannerbtn_close").click(function () {

    $(this).stop(true, true).animate({
      marginTop: "-40px"
    }, 500);
    $(".bannerbox").stop(true, true).animate({
      marginTop: "-40px"
    }, 500);
    $("#nav").stop(true, true).animate({
      marginTop: "0"
    }, 500);
  });

  /* ________________퀵스크롤________________ */
  $("#quick_scroll").hide();

  $(window).scroll(function () {

    if ($(this).scrollTop() > 700) {
      $("#quick_scroll").fadeIn();
    } else {
      $("#quick_scroll").fadeOut();
    }
  });

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 700 && $(this).scrollTop() < 2000) {
      $("#quick_scroll ul .quick_1").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_1 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_1").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_1 a .quick_hover").css({"display": "none"});
    }

    if ($(this).scrollTop() > 2000 && $(this).scrollTop() < 3200) {
      $("#quick_scroll ul .quick_2").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_2 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_2").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_2 a .quick_hover").css({"display": "none"});
    }

    if ($(this).scrollTop() > 3200 && $(this).scrollTop() < 4200) {
      $("#quick_scroll ul .quick_3").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_3 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_3").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_3 a .quick_hover").css({"display": "none"});
    }

    if ($(this).scrollTop() >= 4200 && $(this).scrollTop() < 5400) {
      $("#quick_scroll ul .quick_4").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_4 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_4").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_4 a .quick_hover").css({"display": "none"});
    }

    if ($(this).scrollTop() >= 5400 && $(this).scrollTop() < 7000) {
      $("#quick_scroll ul .quick_5").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_5 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_5").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_5 a .quick_hover").css({"display": "none"});
    }

    if ($(this).scrollTop() >= 7000 && $(this).scrollTop() < 9000) {
      $("#quick_scroll ul .quick_6").css({"width": "150px","border-radius": "25px","transition": "all 0.3s"});
      $("#quick_scroll ul .quick_6 a .quick_hover").css({"display": "inline-block"});
    } else {
      $("#quick_scroll ul .quick_6").css({"width": "20px","border-radius": "50%"});
      $("#quick_scroll ul .quick_6 a .quick_hover").css({"display": "none"});
    }
  });

  $("#quick_scroll ul .quick_1").click(function () {
    $("body,html").animate({scrollTop: "1400px"}, 500);
  });

  $("#quick_scroll ul .quick_2").click(function () {
    $("body,html").animate({scrollTop: "2500px"}, 500);
  });

  $("#quick_scroll ul .quick_3").click(function () {
    $("body,html").animate({scrollTop: "3600px"}, 500);
  });

  $("#quick_scroll ul .quick_4").click(function () {
    $("body,html").animate({scrollTop: "4700px"}, 500);
  });

  $("#quick_scroll ul .quick_5").click(function () {
    $("body,html").animate({scrollTop: "5800px"}, 500);
  });

  $("#quick_scroll ul .quick_6").click(function () {
    $("body,html").animate({scrollTop: "6950px"}, 500);
  });


  /* ________________profile________________ */
  $(window).scroll(function () {

    let wscroll = $(this).scrollTop();

    if (wscroll >= 1000) {
      $(".skill_up li:nth-child(1) .s_bar, .skill_up li:nth-child(3) .s_bar, .skill_up li:nth-child(6) .s_bar").addClass("skills1");
      $(".skill_up li:nth-child(2) .s_bar, .skill_up li:nth-child(4) .s_bar").addClass("skills2");
      $(".skill_up li:nth-child(5) .s_bar").addClass("skills3");
    } else {
      $(".s_bar").removeClass("skills1 skills2 skills3");
    }
  });


  /* ________________design________________ */
  $(".tabbox>li:not(:first)").hide();

  $(".tab>li").click(function () {
    $(".tab>li").removeClass("selected");
    $(this).addClass("selected");
    $(".tabbox>li").hide();
    $($(this).find("a").attr("href")).show();
  });

  $(".large1>li").click(function () {

    g_pop = $(this).index();

    $(".g_page span:nth-child(1)").text(g_pop + 1);
    $("html").css({overflowY: "hidden"});
    $(".pop1>li").eq(g_pop).show();
    $("#design_popup").stop(true, true).fadeIn();

    return false;

  });

  $(".right_btn").click(function () {
    if (g_pop < 9) {
      $(".pop1>li").eq(g_pop).stop(true,true).fadeOut();
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop + 1);
      $(".pop1>li").eq(g_pop).stop(true,true).fadeIn();
    }
  });

  $(".left_btn").click(function () {
    if (g_pop > 0) {
      $(".pop1>li").eq(g_pop).stop(true,true).fadeOut();
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop + 1);
      $(".pop1>li").eq(g_pop).stop(true,true).fadeIn();
    }
  });

  $(".btn_close").click(function () {
    $("html").css({overflowY: "scroll"});
    $("#design_popup").stop(true, true).fadeOut();
    $(".pop1>li").stop(true, true).hide();
  });

  $(".large2>li").click(function () {

    k_pop = $(this).index();

    $(".mo_page span:nth-child(1)").text(k_pop + 1);
    $("html").css({overflowY: "hidden"});
    $(".modal_in>li").eq(k_pop).show();
    $("#modal_pop").stop(true, true).fadeIn();

    return false;

  });

  $(".mo_right_btn").click(function () {
    if (k_pop < 9) {
      $(".modal_in>li").eq(k_pop).stop(true,true).fadeOut();
      k_pop++;
      $(".mo_page span:nth-child(1)").text(k_pop + 1);
      $(".modal_in>li").eq(k_pop).stop(true,true).fadeIn();
    }
  });

  $(".mo_left_btn").click(function () {
    if (k_pop > 0) {
      $(".modal_in>li").eq(k_pop).stop(true,true).fadeOut();
      k_pop--;
      $(".mo_page span:nth-child(1)").text(k_pop + 1);
      $(".modal_in>li").eq(k_pop).stop(true,true).fadeIn();
    }
  });

  $(".mobtn_close").click(function () {
    $("html").css({overflowY: "scroll"});
    $("#modal_pop").stop(true, true).fadeOut();
    $(".modal_in>li").stop(true, true).hide();
  });


  /* ________________publishing________________ */

  function guide1() {
    $(".slide_btn>i").toggleClass("active");
  }
  auto1 = setInterval(guide1, 500);

  $(".t_slide ul li:nth-child(n)").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".t_slide ul li:nth-child(n)").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });

  $(".l_list li").click(function () {

    clearInterval(auto1);

    $(".l_list li").removeClass("btn_active");
    $(this).addClass("btn_active");

    val = $(this).index();
    $(".text_slide ul").animate({
      "left": -360 * val + "px"
    });
    $(".t_slide ul").animate({
      "left": -694 * val + "px"
    });

  })
  

  /* ________________responsive________________ */

  $(".pc_slide ul li").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".pc_slide ul li").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });
  $(".tb_slide ul li").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".tb_slide ul li").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });
  $(".mo_slide ul li").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".mo_slide ul li").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });

  $(".p2_btn").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });

  $(".re_tb_close").click(function(){
    $(".re_pop").hide();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".re_pop").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".re_pop").hide();
    return false;
  });

  $(".p3_btn").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });

  $(".re_tb_close").click(function(){
    $(".re_pop").hide();
    $("html").css({"overflow-y":"scroll"}); 
  });

  $(".re_pop").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".re_pop").hide();
    return false;
  });


  /* ________________planning________________ */



  $(".plan_panel>li:not(:first)").hide();

  $(".planning_menu>li").click(function(){
    $(".planning_menu>li").removeClass("selected1");
    $(this).addClass("selected1");
    $(".plan_panel>li").hide();
    $($(this).find("a").attr("href")).show();

  });

  $(".planning_menu li:first-child").click(function(){
    $(".plangallery gallery1 .webplan_tab_sub li:first").click();
  });

  $(".planning_menu li:nth-child(2").click(function(){
    $(".plangallery gallery2 .webplan_tab_sub li:first").click();
  });

  $(".planning_menu li:last-child").click(function(){
    $(".plangallery gallery3 .webplan_tab_sub li:first").click();
  });

  $(".planning_menu li:last-child").click(function(){
    $(".plangallery gallery4 .webplan_tab_sub li:first").click();
  });

  $(".planning_menu li:last-child").click(function(){
    $(".plangallery gallery5 .webplan_tab_sub li:first").click();
  });



  let goldidxA=0;
  let gidxA=0;

  function galleryImgA(gidxA){
    if(goldidxA!=gidxA){
      $(".gallery1 .webplan_tab_sub li").eq(goldidxA).css({"opacity":0.3});
      $(".gallery1 .webplan_tab_sub li").eq(gidxA).css({"opacity":1});
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300);
    }
    goldidxA=gidxA;
  }
  $(".gallery1 .webplan_tab_sub li").click(function(){
		gidxA=$(this).index();
		galleryImgA(gidxA);
	});


  let goldidxB=0;
  let gidxB=0;

  function galleryImgB(gidxB){
    if(goldidxB!=gidxB){ 
      $(".gallery2 .webplan_tab_sub li").eq(goldidxB).css({"opacity":0.3});		
      $(".gallery2 .webplan_tab_sub li").eq(gidxB).css({"opacity":1});
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300);
    }
    goldidxB=gidxB;
  }

  $(".gallery2 .webplan_tab_sub li").click(function(){
		gidxB=$(this).index();
		galleryImgB(gidxB);
	});

  let goldidxC=0;
  let gidxC=0;

  function galleryImgC(gidxC){
    if(goldidxC!=gidxC){ 
      $(".gallery3 .webplan_tab_sub li").eq(goldidxC).css({"opacity":0.3});		
      $(".gallery3 .webplan_tab_sub li").eq(gidxC).css({"opacity":1});
      $(".gallery3 .largeImg li").eq(goldidxC).stop().fadeOut(300);
      $(".gallery3 .largeImg li").eq(gidxC).stop().fadeIn(300);
    }
    goldidxC=gidxC;
  }
  $(".gallery3 .webplan_tab_sub li").click(function(){
		gidxC=$(this).index();
		galleryImgC(gidxC);
	});

  let goldidxD=0;
  let gidxD=0;

  function galleryImgD(gidxD){
    if(goldidxD!=gidxD){ 
      $(".gallery4 .webplan_tab_sub li").eq(goldidxD).css({"opacity":0.3});		
      $(".gallery4 .webplan_tab_sub li").eq(gidxD).css({"opacity":1});
      $(".gallery4 .largeImg li").eq(goldidxD).stop().fadeOut(300);
      $(".gallery4 .largeImg li").eq(gidxD).stop().fadeIn(300);
    }
    goldidxD=gidxD;
  }
  $(".gallery4 .webplan_tab_sub li").click(function(){
		gidxD=$(this).index();
		galleryImgD(gidxD);
	});

  let goldidxE=0;
  let gidxE=0;

  function galleryImgE(gidxE){
    if(goldidxE!=gidxE){ 
      $(".gallery5 .webplan_tab_sub li").eq(goldidxE).css({"opacity":0.3});		
      $(".gallery5 .webplan_tab_sub li").eq(gidxE).css({"opacity":1});
      $(".gallery5 .largeImg li").eq(goldidxE).stop().fadeOut(300);
      $(".gallery5 .largeImg li").eq(gidxE).stop().fadeIn(300);
    }
    goldidxE=gidxE;
  }
  $(".gallery5 .webplan_tab_sub li").click(function(){
		gidxE=$(this).index();
		galleryImgE(gidxE);
	});


  function guide5() {
    $(".slide_btn>i").toggleClass("active");
  }
  auto1 = setInterval(guide5, 500);

  $(".webplan_imgback1").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".webplan_imgback1").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });

  function guide6() {
    $(".slide_btn>i").toggleClass("active");
  }
  auto1 = setInterval(guide6, 500);

  $(".webplan_imgback2").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".webplan_imgback2").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });














});