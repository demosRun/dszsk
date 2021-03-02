window.autoScaleOnLoad = function () {
  autoScale({
    // 设计宽度PC
    deviseW: 1920,
    // 设计高度PC
    deviseH: 1080,
    type: 'show',
    box: '.top-bar'
  })

  new tabIt(document.querySelector('.zyhy .tab-bar'), document.querySelectorAll('.xuexi-box .zyhy-box'))
  document.querySelectorAll('.xuexi-box .zyhy-box').forEach(element => {
    
    new tabIt(element.querySelectorAll('.zyhy-item-tab'), element.querySelectorAll('.jie-table'))
  });
}