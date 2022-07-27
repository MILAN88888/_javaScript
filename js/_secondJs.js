function animateFunction()
{
    const animate=document.getElementById('animate');
    let pos=0;
    let id=null;
    clearInterval(id);
    id=setInterval(frame, 10);
    function frame()
    {  
        if(pos==350)
        {
            clearInterval(id);
        }
        else
        {
            pos++;
            animate.style.top=pos+"px";
            animate.style.left=pos+"px";
          
        
        }
    }
}
function myCookies()
{
  
   let x= navigator.cookieEnabled  ? "cookies is enabled" : "cookies isnot enabled";
   document.getElementById('cook').innerHTML=x;
    
}
function UpperCase()
{
const x= document.getElementById('fname');
x.value=x.value.toUpperCase();

      
        
}
function mouseOver()
{
   document.getElementById('mouseover').innerHTML="This is  on over";
// obj.style.backgroundColor="green";


}
function outOver()
{
    document.getElementById('mouseover').innerHTML="This is  on out";
    // obj.style.backgroundColor="yellow";
}


// const btn=document.querySelectorAll('button');
// btn.addEventListener('click',()=>{
//     document.body.style.backgroundColor="yellow";
// });
