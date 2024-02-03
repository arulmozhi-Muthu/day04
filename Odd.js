//1.Print odd numbers in an array

var temp=[];
var res=function(arr){
for(var i=0;i<arr.length;i++)
{
  if(arr[i]%2!=0){
   temp.push(arr[i]);
   }
  }
return res
   }
res([10,25,64,97,63]);
console.log(temp);




//arrow function
1.Print odd numbers in an array
var temp=[]
var res=(arr)=>{
for(var i=0;i<arr.length;i++)
{
  if(arr[i]%2!=0){
   temp.push(arr[i]);
   }
  }
return res
   }
res([10,25,64,97,63]);
console.log(temp);
