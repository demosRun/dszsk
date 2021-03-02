window.autoScaleOnLoad = function () {
  autoScale({
    // 设计宽度PC
    deviseW: 1920,
    // 设计高度PC
    deviseH: 1080,
    type: 'show',
    box: '.top-bar'
  })

  autoScale({
    // 设计宽度PC
    deviseW: 1919,
    // 设计高度PC
    deviseH: 1181,
    type: 'show',
    box: '.yuanqiu'
  })

  new tabIt(document.querySelector('.zyhy .tab-bar'), document.querySelectorAll('.xuexi-box .zyhy-box'))
  document.querySelectorAll('.xuexi-box .zyhy-box').forEach(element => {
    
    new tabIt(element.querySelectorAll('.zyhy-item-tab'), element.querySelectorAll('.jie-table'))
  });
}
var mySwiper = null
$(function() {
  if (document.querySelector('.swiper-container')) {
    mySwiper = new Swiper('.swiper-container',{
      // pagination: '.pagination',
      // paginationClickable: true
      slidesPerView : 5,
    })
  }
})

function leftClick () {
  mySwiper.swipePrev()
}

function rightClick () {
  mySwiper.swipeNext()
}