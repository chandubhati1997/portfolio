const mobileNav= () => {
    const btn=document.querySelector(".header__bar")
const mobileNav =document.querySelector(".mobile__nav")
const mobilelinks =document.querySelectorAll(".mobile__link");

let ismobileopen = false
btn.addEventListener('click',()=> {
    ismobileopen=!ismobileopen
    console.log(ismobileopen);
    
    if(ismobileopen){
        mobileNav.style.display="flex";
     document.body.style.overflowY="hidden";
    }else {
        mobileNav.style.display="none";
        document.body.style.overflowY="auto";
    }
  
});


mobilelinks.forEach((links)=>{
    links.addEventListener('click',()=>{
     ismobileopen=false;
     mobileNav.style.display="none";
     document.body.style.overflowY='auto'
     console.log(ismobileopen);
   console.log(links);
     
})
   
  })


 
}


export default mobileNav;