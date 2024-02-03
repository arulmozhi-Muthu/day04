//3.Sum of all numbers in an array

var sum=function(arr){
var temp=[];
var total=0;
for(var i=0;i<arr.length;i++){
  total=total+arr[i];
}
console.log(total);
}
sum([13,25,89,46,79]);




//arrow function
//3.Sum of all numbers in an array

var sum=(arr)=>{
    var temp=[];
    var total=0;
    for(var i=0;i<arr.length;i++){
      total=total+arr[i];
    }
    console.log(total);
    }
    sum([13,25,89,46,79]);