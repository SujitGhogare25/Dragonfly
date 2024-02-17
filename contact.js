
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.top = "0";
}
function closemenu() {
  sidemenu.style.top = "-300px";
}
/*-------------------------Contact Form-------------------- */
 function loadingAnimationConatactForm(){
    
    gsap.from(".form_container  h2",{
       y:100,
       opacity:0,
       delay:0.4,
       duration:0.4
    
    })
    gsap.from(".contact_form  form",{
        scale:1.1,
        delay:0.4,
        duration:0.4
    })
}
loadingAnimationConatactForm()

/*-------------------------Foorter------------------ */
function loadingAnimationFooter(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("footer",{
       x:-1100,
       delay:0.4,
       duration:0.4,
       scrollTrigger:{
           trigger:"footer",
           
       }
    })
  }
  loadingAnimationFooter()