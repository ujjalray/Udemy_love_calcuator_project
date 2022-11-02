function Calculate()
{
   var a=Math.random();
   var score=Math.round((a*99)+1);
   var x=document.getElementsByClassName("inputnames");
   
    var Fast_value=x[0].value;
    var Secend_value=x[1].value;
  //  Secend_value.style.Color="red";
   var a= confirm(Fast_value+ " and " +Secend_value+" your Love score is ❤"+ score +"%");
  if(a>0)
  { 
     alert("Injoy")
  }
  else
  {
     alert(" Thnnks for seen")
  } 


}