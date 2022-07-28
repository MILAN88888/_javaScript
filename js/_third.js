const x = document.getElementById('click');

// x.addEventListener('click',dateFunction);

function dateFunction()
{   const y = document.getElementById('demo');
    let date=new Date();
    y.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

async function name1()
{   console.log('Inside function');
    const response= await fetch('https://api.github.com/users');
    console.log('before response');
    const users=await response.json();
    console.log('user are here');
    return users;
  
}
console.log('beforecalling');
let a= name1();
console.log('aftercalling');
console.log(a);
a.then( (data)=>
{
    console.log(data);

});
console.log('Last line of code');

