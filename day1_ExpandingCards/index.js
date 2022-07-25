const divs = document.querySelectorAll('.panel')
divs.forEach(item => {
    item.onclick = () => {
        removeActiveClasses()   
        item.classList.add('active')  //添加元素的class名
    }
})

//用于删除所有divs中元素的class
function removeActiveClasses() {
    divs.forEach(item => {
        item.classList.remove('active')//删除元素的class名
    })
}