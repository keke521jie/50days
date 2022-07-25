const progress = document.querySelector('.progress')
const circle = document.querySelectorAll('.circle')
const btns = document.querySelectorAll('button')


let currentActive = 1   //记录进度的变量

btns[0].onclick = () => {  //后退按钮的点击事件
    if (currentActive > 1) {
        currentActive--
    }
    change()
}

btns[1].onclick = () => {  //前进按钮的点击事件
    if (currentActive < circle.length) {
        currentActive++
    }
    change()
}

function change() {   //点击按钮后进度条改变样式的方法
    circle.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    if (currentActive == 1) {
        btns[0].disabled = true; //使用true或false，控制是否让按钮禁用
    } else if (currentActive == circle.length) {
        btns[1].disabled = true;    
    } else {
        btns[0].disabled = false;
        btns[1].disabled = false;
    }

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'
}