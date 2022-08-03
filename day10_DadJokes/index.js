getJoke()   //初始化页面上显示
const btn = document.querySelector(".btn")
const text = document.querySelector(".text")
btn.onclick = () => {
    getJoke()
}

function getJoke() {   //ajax发送请求获取笑话
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'https://icanhazdadjoke.com')
    xhr.setRequestHeader('Accept', 'application/json')   //携带请求头只获取笑话
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                text.innerText = JSON.parse(xhr.response).joke
            }
        }
    }
}