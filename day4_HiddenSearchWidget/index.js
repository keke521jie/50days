const search_input = document.querySelector('.search_input')
const search_btn = document.querySelector('.search_btn')

search_btn.onclick = () => {
    if(search_input.style.width == '200px'){
        search_input.style.width = 0 + 'px'
    }else{
        search_input.style.width = 200 + 'px'
    }
}