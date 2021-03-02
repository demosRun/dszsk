function tabIt(tabBox, connBox) {
  if (!connBox) {
    console.log('容器不存在!')
    return
  }
  this.tabBox = tabBox
  if (tabBox instanceof HTMLElement) {
    this.tabBox = tabBox.children
  }
  if (connBox instanceof HTMLElement) {
    this.connBox = connBox.children
  } else {
    this.connBox = connBox
  }
  console.log(this.connBox)
  // 默认选中第一项
  this.showIndex(0)
  for (var index = 0; index < this.tabBox.length; index++) {
    var element = this.tabBox[index];
    var _this = this
    element.setAttribute('tabind', index)
    element.addEventListener('click', function () {
      var activeIndex = parseInt(this.getAttribute('tabind'))
      // console.log(this, _this)
      _this.showIndex(activeIndex)
    })
  }
}

tabIt.prototype.showIndex = function (activeIndex) {
  console.log(activeIndex)
  for (var index = 0; index < this.connBox.length; index++) {
    var element = this.connBox[index];
    if (activeIndex == index) {
      element.style.display = 'block'
    } else {
      element.style.display = 'none'
    }
  }
  for (var index = 0; index < this.tabBox.length; index++) {
    var element = this.tabBox[index];
    if (activeIndex == index) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  }
}