const bj = document.querySelector('.bj')
const container = document.querySelector('.container')
let load = 0 //记录加载度
const changeLoad = setInterval(change, 30)

function change() { //给定时器调用的函数用于计算load
    if (load > 99) clearInterval(changeLoad)
    load++
    changeStyle()
}

function changeStyle() {   //用于改变样式的函数
    container.innerText = load > 100 ? 100 + '%' : load + '%'   //改变页面展示的加载度
    bj.style.filter = `blur(${100 - load}px)`   //改变背景模糊度
    container.style.opacity = `${1 - (load / 100)}`   //改变字体透明度 
}