var a=document.querySelector(".cursor")
document.addEventListener("mousemove", function(dets){
    a.style.left = dets.x -7+"px"
    a.style.top = dets.y -7+"px"
})

var blur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    blur.style.left = dets.x -85 +"px"
    blur.style.top = dets.y -85 +"px"
})

var h4all=document.querySelectorAll(".nav h4")
h4all.forEach(function(elm){
    elm.addEventListener("mouseenter",function(){
        a.style.scale = 5
        // a.style.width = "70px"
        // a.style.height = "70px"
        // a.style.borderRadius= "50%"
        a.style.border="0.5px solid white"
        a.style.backgroundColor="transparent"
        a.style.Color="black"
    })
    elm.addEventListener("mouseleave",function(){
        a.style.scale = 1
        a.style.border="0px solid #95C11E"
        a.style.backgroundColor="#95C11E"
        a.style.color="white"
    })
})

gsap.to(".nav",{
    backgroundColor : "black",
    height:"90px",
    duration : 1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: "top -90%",
        scrub:2
    }
})


gsap.from(".about-us img, .about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start: "top 60%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.7,
    opacity:0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 70%",
        end:"top 65%",
        scrub:1
    }
})

var i=document.querySelector("#pic1")
var car=document.querySelectorAll(".card")
car.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        i.style.transform ="rotate3d(-1,1,0,20deg)"
    })
    elem.addEventListener("mouseleave",function(){
        i.style.transform ="rotate3d(0,0,0,0)"
    })
})
var j=document.querySelector("#pic2")
var car=document.querySelectorAll(".card")
car.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        j.style.transform ="rotate3d(-1,1,0,20deg)"
    })
    elem.addEventListener("mouseleave",function(){
        j.style.transform ="rotate3d(0,0,0,0)"
    })
})
var k=document.querySelector("#pic3")
var car=document.querySelectorAll(".card")
car.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        k.style.transform ="rotate3d(-1,1,0,20deg)"
    })
    elem.addEventListener("mouseleave",function(){
        k.style.transform ="rotate3d(0,0,0,0)"
    })
})


gsap.from("#col1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 35%",
        end:"top 30%",
        scrub:2
    }
}

)
gsap.from("#col2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        // markers:true,
        start:"top 88%",
        end:"top 83%",
        scrub:2
    }
}
)

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 73%",
        scrub:2
    }
})