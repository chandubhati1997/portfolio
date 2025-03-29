const darkmode =() => {
 const dark=document.querySelectorAll('#modes');
 console.log(dark);
 const theme =localStorage.getItem('theme');
 theme && document.body.classList.add(theme)
   dark.forEach((btn)=>{
    btn.addEventListener('click',()=>{
     document.body.classList.toggle('light-mode');
     if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme','light-mode');
     }else{
        localStorage.removeItem('theme');
     }
    

        
   })
   })
} 


export default darkmode