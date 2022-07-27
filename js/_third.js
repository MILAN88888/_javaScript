const x=document.getElementById('button');
console.log(x);

x.addEventListener('click',()=>{
    console.log('hello');
    document.getElementById('demo').innerHTML="you clicke";
});
