const box_left = document.querySelector('.box-left')
const box_right = document.querySelector('.box-right')

box_left.onmouseover = () => {
    box_left.style.width = 75 + '%'
    box_right.style.width = 25 + '%'
}
box_left.onmouseout = () => {
    box_left.style.width = 50 + '%'
    box_right.style.width = 50 + '%'
}
box_right.onmouseover = () => {
    box_right.style.width = 75 + '%'
    box_left.style.width = 25 + '%'
}
box_right.onmouseout = () => {
    box_right.style.width = 50 + '%'
    box_left.style.width = 50 + '%'
}


