const boxs = document.querySelectorAll('.box')

window.addEventListener('scroll',triggerScroll)

triggerScroll() //初始化调用

function triggerScroll(){
    const triggerHeight = window.innerHeight / 5 * 4   // 计算触发高度
    boxs.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerHeight){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}






























/* const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)   //绑定滚轮事件

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4  //计算触发高度
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top  //方法返回元素的大小及其相对于视口的位置
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
} */