
var page=0;
$(".screen").click(function(){
  page+=1;
  if (page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
});

$(".home-button").mousedown(function(){
  page = 0;
  $(this).css("background-color","#BEC3C4");
  $(".pages").css("left","-"+page*100+"%");
  
});

$(".home-button").mouseup(function(){
  $(this).css("background-color","#fff");
}); 


$(".i5").click(function(){
  $(".phonename").text($(this).text());
  $(".phone").css("width","");
  $(".screen").css("height","");
});

$(".i6").click(function(){
  $(".phonename").text($(this).text());
  $(".phone").css("width","260px");
  $(".screen").css("height","400px");
});

$(".i6plus").click(function(){
  $(".phonename").text($(this).text());
  $(".phone").css("width","280px");
  $(".screen").css("height","430px");
});

