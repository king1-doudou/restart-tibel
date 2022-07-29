/*
 * @Author: ChenYu
 * @LastEditors: ChenYu
 * @Date: 2022-07-29 15:22:13
 * @LastEditTime: 2022-07-29 16:53:45
 * @Description:
 */
// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 60
// }
// var typed = new Typed('.element', options)

class NewStepOne {
  constructor(options) {
    console.log('————NewStepOne组件初始化————')
    // 外层包围盒
    this.ele = options.ele
    this.initStepOnePage()
  }
  // 初始化第一页
  initStepOnePage() {
    // 添加第一个元素
    this.appendFirstElement()
  }
  // 添加第一个元素
  appendFirstElement() {
    console.log('————添加第一个元素————')
    // 第一个元素
    let item1 = document.createElement('div')
    item1.classList.add('item-box')
    let container = document.querySelector(this.ele)
    // 添加第一个元素
    container.appendChild(item1)
    // 第一行字
    let sentence1 = document.createElement('div')
    sentence1.classList.add('sentence1')
    item1.appendChild(sentence1)
    var options = {
      strings: ['重启 · 西藏之旅'],
      typeSpeed: 80
    }
    new Typed('.sentence1', options)
  }
}
