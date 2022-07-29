/*
 * @Author: ChenYu
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-29 15:22:13
 * @LastEditTime: 2022-07-30 01:06:19
 * @Description:
 */

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
    this.seleteBlink()


    // 添加点击事件
    setTimeout(() => {
      sentence1.addEventListener('click', this.handleSentence1Click.bind(this), false)
    }, 1000)
  }

  // 第一次点击
  handleSentence1Click() {
    // 删除当前文字
    let sentence1 = document.querySelector('.sentence1')
    let item = document.querySelector('.item-box')
    item.removeChild(sentence1)
    // 添加第二句
    this.handleAddSentence2()
  }

  seleteBlink() {
    let item = document.querySelector('.item-box')
    let blink = document.querySelector('.typed-cursor')
    item.removeChild(blink)
  }

  handleAddSentence2() {
    let item = document.querySelector('.item-box')
    let sentence2 = document.createElement('div')
    sentence2.classList.add('sentence2')
    item.appendChild(sentence2)
    var options = {
      strings: ['T I B E L'],
      typeSpeed: 80
    }
    new Typed('.sentence2', options)
    this.seleteBlink()

    // 添加点击事件
    setTimeout(() => {
      sentence2.addEventListener('click', this.handleSentence2Click.bind(this), false)
    }, 1000)
  }

  // 点击第二句
  handleSentence2Click() {
    // 删除当前item-box
    let container = document.querySelector(this.ele)
    let item = document.querySelector('.item-box')
    container.removeChild(item)
    // 加载西藏风景图片
    this.loadTibelPicture()
  }

  // 加载西藏风景
  loadTibelPicture() {
    // 生成dom元素，装图片
    let tibelPictureContainer = document.createElement('div')
    tibelPictureContainer.classList.add('tibel-picture-container')
    let container = document.querySelector(this.ele)
    container.appendChild(tibelPictureContainer)
    new TibelPicture({
      el: '.tibel-picture-container'
    })
  }
}

class TibelPicture {
  constructor(options) {
    // 初始化轮播图
    console.log('-----初始化轮播图-----');
    this.el = options.el
    this.tibelPictureList = [{
      id:'budalagong1',
      name: '布达拉宫',
      content: '巴啦啦巴啦啦布达拉宫魔仙变！',
      src: '../static/image/tibelPicture/budalagong.jpg'
    }]
    this.addPictureList2Dom()
  }
  addPictureList2Dom() {
    let picList = this.tibelPictureList
    picList.forEach(el => {
      console.log(el);
      this.createImage(el)
    })
  }

  createImage(imgInfo){
    let image = document.createElement('img')
    image.setAttribute('src', imgInfo.src)
    image.setAttribute('width', '100%')
    image.setAttribute('height', '100%')
    image.style.borderRadius = '20px'
    let container = document.querySelector(this.el)
    container.appendChild(image)
  }
}