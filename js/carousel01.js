// 宣告一個變數來儲存現在的頁數
    // 作用域 Scope 全域變數
    // ----------初始值為零
    let page = 0;
    //---------- 設定圈圈初始一開始的位址 這裡也可以用css設定
    $('.slider-dots li').eq(page).css('background', '#fff').siblings().css('background', 'rgba(255, 255, 255, 0.466)');
    $('.slider-PerformanceTEXT li').eq(page).css('opacity','1').siblings().css('opacity','0');

    //hover設定
    // $(this) 代名詞 = 被 hover 的 li
    //.index()是索引的意思 

    //---------- 點豆豆 去做的變化
    $('.slider-dots li').click(function () {
      // console.log('hi', $(this));
      // console.log($(this).index());
      $(this).css('background', '#fff').siblings().css('background', 'rgba(255, 255, 255, 0.466)');
      // ^其他的物件變回原本的顏色或透明消失
      $('.img-wrap').css('left', $(this).index() * -800 + 'px');
      // 照片根據它選的第幾個去變
      $('.slider-PerformanceTEXT li').eq( $(this).index() ).css('opacity','1').siblings().css('opacity','0');
     // 根據它選的第幾個去變 (這邊是$(this).index()不是用page唷(沒給它宣告))
    })




// ----------左右鍵按鈕 去做的變化
    $('.chevron-left ').click(function () {
      
      page = page - 1;
      if (page <0) {
        page = 9;
      }

      $('.img-wrap').css('left', page * -800 + 'px');
      $('.slider-dots li').eq(page).css('background', '#fff').siblings().css('background', 'rgba(255, 255, 255, 0.466)');
      $('.slider-PerformanceTEXT li').eq(page).css('opacity','1').siblings().css('opacity','0');
     
    })

  
    $('.chevron-right ').click(function () {
      
      page = page + 1;

      if (page > 9) {
        page = 0;
      }
     
      $('.img-wrap').css('left', page * -800 + 'px');
      // 為何不是相反 待問老師
    
      $('.slider-dots li').eq(page).css('background', '#fff').siblings().css('background', 'rgba(255, 255, 255, 0.466)');
      $(' .slider-PerformanceTEXT li').eq(page).css('opacity','1').siblings().css('opacity','0');


    })




    // js es6 的 Function 寫法, 俗稱箭頭函式

    // ----------這邊是要自動撥放的設定
    // setInterval(() => {
      // page = page + 1;

      // if (page > 9) {
      //   page = 0;
      // }

      // $('.img-wrap').css('left', page * -800 + 'px');
      // console.log('page = ', page);


      // $('.slider-dots li').eq(page).css('background', '#fff').siblings().css('background', 'rgba(255, 255, 255, 0.466)');


    // }, 3000);
