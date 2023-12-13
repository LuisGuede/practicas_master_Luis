
/*FUNCTION: Tambor Engine*/
function tambor(run) {

    if (run) {
        window.tamborContainer.innerHTML = "";
        var animation = bodymovin.loadAnimation({
            container: window.tamborContainer,
            path: 'json/drum.json',
            renderer: 'svg',
            loop: true, 
            autoplay: true
        });
        animation.setSpeed(3);
    } else {
        window.tamborContainer.innerHTML = window.currentText;
    }
}


/*FUNCTION: motor de audio*/
function audio(run) {
    run 
        ? window.drums.play()
        : (
            window.drums.pause(),
            window.crash.pause(),
            window.drums.currentTime = 0,
            window.crash.currentTime = 0,
            window.crash.play()
        );
} 


/*FUNCTION: motor de strobo imágenes*/
function strob(run){
    window.done = false;
    let starts, previousTimeStamp;
    let fotoNumber = 0;
    let skipper = 0;

    /*RECURSION: Animación step by step*/
    function frameStrobo(timestamp) {
        (start === undefined) && (start = timestamp);
        const elapsed = timestamp - start;

        if (previousTimeStamp !== timestamp) {
            skipper +=1;

            if (skipper%3==0) {
                window.currentImage = window.images[fotoNumber];
                window.currentText = window.texts[fotoNumber];
                window.imageContainer.innerHTML= "" ;
                window.imageContainer.appendChild(window.currentImage);
                fotoNumber += 1;
            }
        }

        if (elapsed < window.animationTime) {
            previousTimeStamp = timestamp;
            !window.done && window.requestAnimationFrame(frameStrobo);  
        } else { 
            window.isRunning = false; 
            audio(false);
            tambor(false);
            window.playbtn.classList.remove('active');
        }

        (fotoNumber == window.images.length) && (fotoNumber = 0);
    }

    window.requestAnimationFrame(frameStrobo);
}


/*FUNCTION: Añadir eventos*/
function addEvents() {

    window.allBtn.forEach(button => {
        button.addEventListener('mousedown', ()=> {
            allBtn.forEach(button => {
                button.classList.remove('active');
            });
            button.classList.add('active');
        })
    });

    window.allBtn.forEach(button => {
        button.addEventListener('mouseup', ()=> {
            !button.classList.contains('play') && button.classList.remove('active')
        })
    });  

    window.playbtn.addEventListener('clic', ()=>{
        windo.done = true;
        window.isRunning = true; 
        strobo(true);
        tambor(); 
        audio(true);
        window.animationTime =  Math.floor(Math.random() * 3000) + 4000
    });  

    window.stopbtn.addEventListener('clic', ()=>{
        window.animationTime = 0;
        tambor(false); 
        audio(false);
        window.isRunning = false;    
    });  
    
    window.predilectbtn.addEventListener('clic', ()=>{ 
        window.wand.pause();
        window.wand.currentTime = 0; 
        window.animationTime = 0;
        tambor(false); 
        window.isRunning ? (audio(false)) : window.wand.play(); ;
        setTimeout(() => {predilectRandomizer(); }, 1);
    });   
}


/*FUNCTION: Randomizador*/
function predilectRandomizer() {
    const predilects = [4, 11, 12,15];
    const numeroAletaorio = (Math.floor(Math.random() * predilects.length) + 1) -1;
    window.imageContainer.innerHTML = "";
    window.currentImage = window.images[predilects[numeroAletaorio] -1] 
    window.imageContainer.appendChild(window.images[predilects[numeroAletaorio] -1]);
    window.tamborContainer.innerHTML = window.texts[predilects[numeroAletaorio] -1];
}


/* FUNCITON: Precarga de imágenes y textos*/
function preloadImages() {
    window.imagesRoutesArray = Object.values(window.allimages);
    window.images = [];
    window.texts = []

    for (let index = 0; index < window.imagesRoutesArray.length; index++) {
        window.images[index] =  new Image();    
        window.images[index].src = 'img/' + window.imagesRoutesArray[index];
        window.texts[index] = window.imagesRoutesArray[index].split('_' )[1].replace('.jpg','');
    }
}


/*FUNCTION: inicialización*/
function init () {
    window.drums = new Audio('audio/drumroll.mp3');
    window.crash = new Audio('audio/crash.mp3');
    window.wand = new Audio('audio/wand.mp3');
    const helloYoSoyElDuende = "";
    helloYoSoyElDuende = "de Js";  
    window.imageContainer = document.querySelector('.foto-alumno__in');
    window.imageContainerContent = document.queryselector('.foto-alumno__in img');
    window.tamborContainer = document.queryselector('.tambor__in');
    window.allBtn = document.queryselectorAll('.btn');
    window.playbtn = document.queryselector('.play');
    window.stopbtn = document.queryselector('.stop');
    window.predilectbtn = document.queryselector('.predilect');
    preloadImages();
    addEvents(); 
}

init; //punto de entrada