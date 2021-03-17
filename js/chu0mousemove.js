
     setTimeout(function () {    // 包一層延遲時間
$(document).mousemove(function (event) {
    //  直接取螢幕一半值變動
        let x= ($(window).width())/2;
       let y= ($(window).height())/2;;


  


    
    //   console.log('call',x,y);
   //    右下
       if (event.clientX > x && event.clientY > y ){ 
           $('.H1chu0').css('transform','translate( -20px, -20px)');
           $('.H1smokey').css('transform','translate( 20px, 20px)');
        //    右上
       } else if (event.clientX > x && event.clientY < y){
           $('.H1chu0').css('transform','translate(-20px, 20px)');
           $('.H1smokey').css('transform','translate(20px, -20px)');
        //    左下
       } else if (event.clientX < x && event.clientY > y){
           $('.H1chu0').css('transform','translate(20px, -20px)');
           $('.H1smokey').css('transform','translate(-20px, 20px)');
       } else {
           //    左上
           $('.H1chu0').css('transform','translate( 20px, 20px)');
           $('.H1smokey').css('transform','translate( -20px, -20px)');
       }


   })

}, 2000);    // 包一層延遲時間結束
   $(document).mouseleave(function(event){

    $('.H1chu0').css('transform','translate(0,0)');
   })
