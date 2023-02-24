const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.gameover');
const playagain = document.querySelector('.button')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        

        clearInterval(loop);


        gameOver.style.display = 'block';
        
        playagain.style.display= 'block'
        
    }
},10)


const btn = document.querySelector('#refresh')

btn.addEventListener('click', () =>{
    location.reload()
})

document.addEventListener('click', jump);