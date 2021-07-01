// main.js
$(function(){
   //이미지, 배경
   var titleData = [
      {
         imgUrl:'images/img1.png',
         bgUrl: 'images/circle-pie1.svg'
      },
      {
         imgUrl:'images/img2.png',
         bgUrl: 'images/circle-pie2.svg'
      },
      {
         imgUrl:'images/img3.png',
         bgUrl: 'images/circle-pie3.svg'
      },
   ];

   // 이벤트
   $('.pager > ul > li').eq(0).click(function(){
      // 타이틀 제품 이미지
      $('figure img')
         .attr('src', titleData[0].imgUrl);
      // 타이틀 배경
      $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
   });
   $('.pager > ul > li').eq(1).click(function(){
      $('figure img')
         .attr('src', titleData[1].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[1].bgUrl})`);
   });
   $('.pager > ul > li').eq(2).click(function(){
      $('figure img')
         .attr('src', titleData[2].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[2].bgUrl})`);
   });

});