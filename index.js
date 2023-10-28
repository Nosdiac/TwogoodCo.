var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px" 
  crsr.style.top = dets.y + "px"  
  crsr_blur.style.left = dets.x - 230 + "px" 
  crsr_blur.style.top = dets.y - 230 + "px"  
})

var h4all = document.querySelector("#nav h4")
h4all.foreach(function(ele){
  ele.addEventListener("mouseenter", function(){
    crsr.style.scale = 2
  })
})


gsap.to("#nav", {
  backgroundColor:"#000",
  duration:0.5,
  height:"110px",
  scrollTrigger: {
    trigger:"#nav", 
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub: 1
  }
})
gsap.to("#main",{
  backgroundColor: "#000",
  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub: 2,
  }

})