

 

// --------------------------about us ---------------------------


let aboutus = document.getElementById('about-us')
let aboutusbtn = document.getElementById('about-us-btn') 
let  content = document.getElementById('content') 
 

let isabout = false;

aboutusbtn.addEventListener('click', () => {
   isabout = !isabout;   
   
   aboutus.style.scale   = isabout ? '1' : '0';
   aboutus.style.position   = isabout ? 'relative' : 'absolute ';
   content.style.scale   = isabout ? '0' : ' 1';
   content.style.position   = isabout ? ' absolute' : 'relative   ';
});
 


// ------------------------------login mein --------------------------------------



let login = document.getElementById('login')
 let showlogin = document.getElementById('login-window')
 let exit = document.getElementById('exit')

 login.onclick = function(){
    showlogin.style.scale ='1'
    exit.style.display= '  inline'
 }
 exit.onclick = function(){
    showlogin.style.scale ='0'
    exit.style.display= ' none'
}