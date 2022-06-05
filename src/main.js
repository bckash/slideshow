

// ......................................................

// a) VARIABLES
//----------------

// slideshow elements (img)
const imgShow1 = document.getElementById("show-img-1")
const imgShow2 = document.getElementById("show-img-2")
const imgShow3 = document.getElementById("show-img-3")

// slideshow animations
const aIN = "animation__in";
const aOUT = "animation__out";

// for slideshow responsive width
let slideshow = document.getElementById("slideshow");



// b) EL
//----------

window.addEventListener("resize", responsiveWidth);


  
// c) FUNCTIONS
//---------------

// slideshow. "time" - distance in ms between animation "in" and "out" (should be the same as "--animation-out-delay" in CSS )
function slideShow (img1, img2, img3, time) {

    setTimeout(()=>{

        setTimeout(()=>img1.classList.add(aIN),0)
        setTimeout(()=>img2.classList.remove(aIN),0.06*time)
        setTimeout(()=>img2.classList.add(aIN),time)
        setTimeout(()=>img3.classList.remove(aIN),time+(0.06*time))
        setTimeout(()=>img3.classList.add(aIN),time*2)        
        setTimeout(()=>img1.classList.remove(aIN),2*time+(0.06*time))
    
    }, 0)
    
    setInterval(()=>{

        setTimeout(()=>img1.classList.add(aIN),0)
        setTimeout(()=>img2.classList.remove(aIN),0.06*time)
        setTimeout(()=>img2.classList.add(aIN),time)
        setTimeout(()=>img3.classList.remove(aIN),time+(0.06*time))
        setTimeout(()=>img3.classList.add(aIN),time*2)        
        setTimeout(()=>img1.classList.remove(aIN),2*time+(0.06*time))
    
    }, time*3)
}

// --> sets the "height" for slideshow to be responsive 
// --> sets CSS variables when "slideshow" changes width, for animation to work properly
function responsiveWidth() {

    const slideshowWidth = slideshow.offsetWidth;

    document.documentElement.style
    .setProperty('--img-distance-X', `${slideshowWidth}px`);
    document.documentElement.style
    .setProperty('--img-distance-X-minus', `-${slideshowWidth}px`);

    slideshow.style.height = `${slideshowWidth/4}px`

  }

//..................................................


// d) DECLARATION

slideShow(imgShow1, imgShow2, imgShow3, 5000)

