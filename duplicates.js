var arr1=[1,2,1,3,1,1,4,5,6,7,9,8,3];
var obj={}
var min_acc=1;
function foo(arr){
  for(var i=0;i<arr.length;i++){
    var ele=arr[i];
    if(obj[ele]){
      obj[ele]++
  }
    else{
      obj[ele]=1
    }
  }
  
  for (var prop in obj){
    console.log(prop);
  }
}
foo(arr1);