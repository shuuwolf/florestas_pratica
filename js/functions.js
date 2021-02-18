$(function(){

   var indiceAtual = 0;
   var indiceMaximo = $('.slider img').length;
   var delay = 5000;

   initSlider();
   
   function initSlider(){
       $('.slider img').eq(0).fadeIn();
       setInterval(function(){
           alternarSlider();
       },delay);
   }

   function alternarSlider(){
       $('.slider img').eq(indiceAtual).fadeOut(2000);
       indiceAtual+=1;
       if(indiceAtual == indiceMaximo){
           indiceAtual = 0;
       }

       $('.slider img').eq(indiceAtual).fadeIn(2000);
   }


    $(window).scroll(function(){
        $('.types').each(function(){
            var windowOffY = $(window).scrollTop();
            var windowHeight = $(window).height();
            var elOffY = $(this).offset().top;
            if(elOffY+20 < (windowOffY + windowHeight) && elOffY+20+$(this).height() > windowOffY){
                $('a').css('border-bottom', '0');
                var target = $(this).attr('target');
                $('.'+target).css('border-bottom', '2px solid white')
                return;
            }
        });
    })
    
});