const audio = document.getElementById("audioElem")
const seekbar = document.getElementById("seekbar")
seekbar.value = 0
setTimeout(()=>{

    audio.addEventListener("timeupdate",()=>{
        value = parseInt((audio.currentTime/audio.duration)*100)
        console.log(value)
        seekbar.value = value
    })
    seekbar.addEventListener("change",()=>{
        audio.currentTime = (audio.duration * seekbar.value)/100
    })
},1000)