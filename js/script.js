var flag = true;
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < 20 && flag == false) {
      console.log("show");
      $("header").addClass("showmenu");
      $("header").removeClass("hidemenu");
      flag = true;
    } else if ($(window).scrollTop() > 40 && flag == true) {
      console.log("hide");
      $("header").addClass("hidemenu");
      $("header").removeClass("showmenu");
      flag = false;
    }
  });

  $("#sub1").click(function () {
    $("#upstatement").css("display", "block");
    $("#Pro").css("display", "none");
    $("#OPENAI").css("display", "none");
    $("#scout2").css("display", "none");
    $("#starry").css("display", "none");
    $("#mullenlowe").css("display", "none");
  });

  $("#sub2").click(function () {
    $("#upstatement").css("display", "none");
    $("#Pro").css("display", "block");
    $("#OPENAI").css("display", "none");
    $("#scout2").css("display", "none");
    $("#starry").css("display", "none");
    $("#mullenlowe").css("display", "none");
  });

  $("#sub3").click(function () {
    $("#upstatement").css("display", "none");
    $("#Pro").css("display", "none");
    $("#OPENAI").css("display", "block");
    $("#scout2").css("display", "none");
    $("#starry").css("display", "none");
    $("#mullenlowe").css("display", "none");
  });

  $("#sub4").click(function () {
    $("#upstatement").css("display", "none");
    $("#Pro").css("display", "none");
    $("#OPENAI").css("display", "none");
    $("#scout2").css("display", "block");
    $("#starry").css("display", "none");
    $("#mullenlowe").css("display", "none");
  });

  $("#sub5").click(function () {
    $("#upstatement").css("display", "none");
    $("#Pro").css("display", "none");
    $("#OPENAI").css("display", "none");
    $("#scout2").css("display", "none");
    $("#starry").css("display", "block");
    $("#mullenlowe").css("display", "none");
  });
});
