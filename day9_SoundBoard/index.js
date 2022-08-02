const divs = document.querySelectorAll(".container>div")
const audios = document.querySelectorAll("audio")

divs.forEach((div, index) => {
    div.onclick = () => {
        play(index)
    }
})

//实现播放的方法  排他思想（暂停所有的播放器并重设置播放时间播放点击对应的播放器）
function play(index) { 
    audios.forEach(audio => {
        audio.pause()
        audio.currentTime = 0
    })
    audios[index].play(); // 播放
}

