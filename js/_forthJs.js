// async function getData(){
//     const response=await fetch('http://localhost/_jsFirst/js/milan.txt');
//     const userData=response.text();
//     return userData;
// }
// let x = getData();
// x.then( (userData)=>{
//     console.log(userData);

// });


// postData 
async function postData()
{
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = {"name":"test","salary":"123","age":"23"};
    params = {
         method : 'post',
         headers:{ 'Content-Type' : 'application/json'},
         body :data
    };
    const response = await fetch(url,params);
   
    const users= response.json();
    console.log(users);
    return users;
}
let y = postData();
y.then( (users)=>{
    console.log(users);
})