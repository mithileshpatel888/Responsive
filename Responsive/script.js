var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})



gsap.to("#nav",{
    backgroundColor: "#000",
    duretion:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:2
        
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:70,
    opacity:0,
    duretion:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duretion:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".card-m",{
    scale:0.8,
    opacity:0,
    duretion:1,
    scrollTrigger:{
        trigger:".card-m",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".card-e",{
    scale:0.8,
    opacity:0,
    duretion:1,
    scrollTrigger:{
        trigger:".card-e",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".elem",{
    scale:0.8,
    opacity:0,
    duretion:1,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})