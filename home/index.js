$(document).ready(function(){

$(".longImg").mouseover(function(){
  $(this).css("margin-right", "30%")
  $(this).delay(.5)

})
$(".longImg").mouseleave(function(){
  $(this).css("margin-right", "15%")
})

$(".longImg").mouseover(function(){
  $(".prvwtxt").css("display", "inherit")
})
$(".longImg").mouseleave(function(){
  $(".prvwtxt").css("display", "none")
})

$(".prtflImg").mouseover(function(){
  $(".floatTxt").css("opacity", 1)
})

$(".prtflImg").mouseleave(function(){
  $(".floatTxt").css("opacity", 0)
})

$(".prtflImg").mouseover(function(){
  $(this).css("border-color", "pink")
  })

$(".prtflImg").mouseleave(function(){
    $(this).css("border-color", "white")
    })

})
