//2.Convert all the strings to title caps in a string array

var temp=[];
var name=function(arr){
  var str=arr.split("");
  for(var i=0;i<str.length;i++)
  {
    str[i]=str[i].toUpperCase();
   temp.push(str[i]);
  }
  console.log(temp.join(""));
}
name("guvi");





//arrow function
2.Convert all the strings to title caps in a string array

var temp=[];
var name=(arr)=>{
  var str=arr.split("");
  for(var i=0;i<str.length;i++)
  {
    str[i]=str[i].toUpperCase();
   temp.push(str[i]);
  }
  console.log(temp.join(""));
}
name("guvi");
