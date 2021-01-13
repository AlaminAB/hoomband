

function HideWrapAll(){
    for(let a=3; a<$(".Questions-wrap").length; a++){
        $(".Questions-wrap")[a].style.display="none"   
    }
    }

    HideWrapAll()

$('.question-title').click(function(){
   
 $(this).toggleClass("cross-icon")
    $(this).siblings(".Questions-text").toggle();
})

$('.seemore-question').click(function(){
    for(let a=0; a<$(".Questions-wrap").length; a++){
        $(".Questions-wrap")[a].style.display="block"   
    }
    $(this).hide();
})