


// ---> VARIABLES
//----------------

// slideshow container
const slideshow = document.getElementById("ksh-slideshow");

// slideshow animations
let animations = {
    imgIn : "ksh-animation__in",
    imgOut : "ksh-animation__out",
    pag : "ksh-animation__pagination"
}

// building "imgParArray" :  array of objects containing "img elements" and "pagination elements" as properties - for slideshowAbstract()
const pagIcons = document.querySelectorAll(".ksh-pag-icons")
const showImages = document.querySelectorAll(".ksh-show-images");

let imgParArray = [];

function toArray (pags, imgs, arr) {

        pags.forEach(el => {
            let obj = {};
            obj.pag = el;
            arr.push(obj)
        })

        for (i=0; i<arr.length; i++) {
            arr[i].img = imgs[i]
        }


}

toArray (pagIcons, showImages, imgParArray)



// ---> EL 
//----------

window.addEventListener("resize", responsiveWidth);



// --> FUNCTIONS
//----------------


// slideshow 
function slideShowAbstract (pagsImgs, animationsObj, time) {

    // get values from "imgParArray"
    function makeVar (arr, index, prop) {
        return Object.values(arr[index])[prop]
    }

    const aIN = Object.values(animationsObj)[0];
    const aPAG = Object.values(animationsObj)[2];
    const t = time/3;

        function backend () {
            for (let i=0; i<pagsImgs.length; i++) {

                let img = makeVar(pagsImgs, i, 1);
                let pag = makeVar(pagsImgs, i, 0);
                let imgNext = makeVar(pagsImgs, 0, 1);
                let pagNext = makeVar(pagsImgs, 0, 0);
    
                if (i !== pagsImgs.length-1) {
                    imgNext = makeVar(pagsImgs, i+1, 1);
                    pagNext = makeVar(pagsImgs, i+1, 0);
                } 
    
                    // animations add
                    setTimeout(() => {
                        img.classList.add(aIN);
                        pag.classList.add(aPAG);
                    }, time*i)
                
                    // animation remove
                    setTimeout(() => {
                        imgNext.classList.remove(aIN);
                        pagNext.classList.remove(aPAG);
                    }, (time*i+t))
            }
        }
        
        setTimeout(() => backend(), 0);
        setInterval(() => backend(), time*pagsImgs.length);
}

// sets the "height" for slideshow to be responsive. sets CSS variables when "slideshow" changes width, for animation to work properly
function responsiveWidth() {

    const slideshowWidth = slideshow.offsetWidth;

    document.documentElement.style
    .setProperty('--img-distance-X', `${slideshowWidth}px`);
    document.documentElement.style
    .setProperty('--img-distance-X-minus', `-${slideshowWidth}px`);

    slideshow.style.height = `${slideshowWidth/4}px`

  }



// | CALL
//----------------

// start value for slideshow container, if <= window width 
responsiveWidth()

// run slideshow. "time" should have the same value as "--animation-out-delay" in CSS
slideShowAbstract(imgParArray, animations, 5000)

