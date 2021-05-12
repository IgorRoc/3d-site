let speed = 0.7
let zoom = 70
let shadow = true
let neon = false
const vel = document.getElementById('vel').children[1]
const zoo = document.getElementById('zoo').children[1]
const rtx = document.getElementById('rtx').children[1]
const neo = document.getElementById('neo').children[1]

function changeSpeed(value) {
    speed += value;

    speed = Math.min(Math.max(.1, speed), 20);

    document.documentElement.style.setProperty('--ballBounce', `${speed}s`);
    vel.innerText = `Velocidade: ${speed.toFixed(2)}s`
}

function changeZoom(value) {
    zoom += value;

    zoom = Math.min(Math.max(1, zoom), 200);

    document.documentElement.style.setProperty('--fontSize', `${zoom}px`);
    zoo.innerText = `Zoom: ${zoom}px`
}

function toggleRTX() {
    shadow = !shadow

    let chao = document.getElementById('chao')
    chao.classList.toggle('floor-light')

    let bola = document.getElementById('bola')
    bola.classList.toggle('ball-light')
    
    let sombra_bola = document.getElementById('sombra-bola')
    sombra_bola.classList.toggle('ballShadow')

    let cubo = document.getElementById('cubo')
    for (const face of cubo.children) {
        if(face.classList.contains("bottom")){
            face.classList.toggle("bottom-shadow")
        }else{
            face.classList.toggle("side-shadow")
        }
    }


    rtx.innerText = `RTX: ${shadow?"ON":"OFF"}`
}

function toggleNeon() {
    neon = !neon

    let bola = document.getElementById('bola')
    bola.classList.toggle('ball-neon')
    
    let cubo = document.getElementById('cubo')
    for (const face of cubo.children) {
        face.classList.toggle("cube-neon")
    }


    neo.innerText = `Neon: ${neon?"ON":"OFF"}`
}