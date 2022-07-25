
function _firstJs()
{
   const text=['A','B','C'];
   let arr= "";
   text.forEach(myFunction);
   document.getElementById('demo').innerHTML=arr;
   function myFunction(value , index, array)
   {
      arr+=value+"<br>";
   }

}
function _secondJs()
{
   const A=[2,4,6,8];
   const B=A.map(myFunction)
   document.getElementById('demo1').innerHTML=B.toString();
   function myFunction(  value, index, array)
   {
      return value*2;
   }


}
function errFunction()
{
   let msg=document.getElementById('demo2');
   msg.innerHTML="";
   let val=document.getElementById('val').value;
   try{
      if(isNaN(val)) throw " you have enter value is not a number";
      val=parseInt(val);
      if(val==0) throw "You have enter 0 which is not correct";
      if(val<0) throw " you have enter below zero";
      if(val>10)throw "you hae enter above 10";
      msg.innerHTML="You have entered value is "+val;

      
   }
   catch( err)
   {
      msg.innerHTML="This is an erro :--"+err;
   }
}
