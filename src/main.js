
const imgShow1 = document.getElementById("show-img-1")
const imgShow2 = document.getElementById("show-img-2")
const imgShow3 = document.getElementById("show-img-3")

const aIN = "animation__in";
const aOUT = "animation__out";

function slideShow (time) {

    setTimeout(()=>{

        setTimeout(()=>imgShow1.classList.add(aIN),0)
        setTimeout(()=>imgShow2.classList.remove(aIN),0.06*time)
        setTimeout(()=>imgShow2.classList.add(aIN),time)
        setTimeout(()=>imgShow3.classList.remove(aIN),time+(0.06*time))
        setTimeout(()=>imgShow3.classList.add(aIN),time*2)        
        setTimeout(()=>imgShow1.classList.remove(aIN),2*time+(0.06*time))
    
    }, 0)
    
    setInterval(()=>{

        setTimeout(()=>imgShow1.classList.add(aIN),0)
        setTimeout(()=>imgShow2.classList.remove(aIN),0.06*time)
        setTimeout(()=>imgShow2.classList.add(aIN),time)
        setTimeout(()=>imgShow3.classList.remove(aIN),time+(0.06*time))
        setTimeout(()=>imgShow3.classList.add(aIN),time*2)        
        setTimeout(()=>imgShow1.classList.remove(aIN),2*time+(0.06*time))
    
    }, time*3)
}

slideShow(5000)

