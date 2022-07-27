<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation</title>
    <script src="js/_secondJs.js"></script>
    <link href="css/second.css" type="text/css" rel="stylesheet">
</head>
<body onload="myCookies()">
    <button id="demo" onclick="animateFunction()">Let see the change</button>
    <div id="container">
        <div id="animate"></div>
    </div>

    <h1>cookies session</h1>
    <p id="cook"></p>
    <h1>onchanged</h1>
    <input type="text" id="fname" onchange="UpperCase()">
    <h1>mouseover and mouseout</h1>
    <div id="mouseover"  onmouseover="mouseOver()" onmouseout="outOver()">
    
    </div>
    
    <h1> event Handler</h1>
         Please Enter your name :
         <input type="text" id="ab"  >
         <p id="eventinput"></p>

         
         <button>click</button>

         <script>
            
            const y= document.getElementById('ab');
y.addEventListener("click",function a() {
    y.style.backgroundColor="yellow";
}

);
y.addEventListener("focusout",
()=>{
    y.value=y.value.toUpperCase();

});
y.addEventListener("input",function a()
{
    document.getElementById('eventinput').innerHTML="Your are typing :- "+y.value;
});



         </script>
</body>
</html>