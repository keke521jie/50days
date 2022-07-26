const search_input = document.querySelector('.search_input')
const search_btn = document.querySelector('.search_btn')
const input = document.getElementById('search_input')

search_btn.onclick = () => {
    if(search_input.style.width == '200px'){
        search_input.style.width = 0 + 'px'
    }else{
        search_input.style.width = 200 + 'px'
        input.focus()  //修改宽度显示输入框并且获取焦点
    }
}