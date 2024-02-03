//Palindromes in an array
function foo(arr){
    var reverse=[];
    var num=[];
    var res;
    for(var i=0;i<arr.length;i++)
      {
      num=arr[i].split("");
      reverse=[]
      for(var j=num.length;j>=0;j--)
      {
        reverse.push(num[j])
      }
     res=reverse.join('');
     console.log(res+' '+arr[i])
     
    if(res==arr[i])
      {
      console.log("The number is palindrome")
      }
    else
      {
      console.log("Not a palindrome")
      }
    
    }
     return res;
    }
    console.log(foo(["1221","2546","343"]))


    Arrow function
var res=(arr)=>{
var reverse=[];
var num=[];
var res;
for(var i=0;i<arr.length;i++)
  {
  num=arr[i].split("");
  reverse=[]
  for(var j=num.length;j>=0;j--)
  {
    reverse.push(num[j])
  }
 res=reverse.join('');
 console.log(res+' '+arr[i])
 
if(res==arr[i])
  {
  console.log("The number is palindrome")
  }
else
  {
  console.log("Not a palindrome")
  }

}
 return res;
}
console.log(foo(["1221","2546","343"]))