//Return median of two sorted arrays of the same size.

function foo(arr1,arr2){
    var arr3=arr1.concat(arr2)
    console.log(arr3)
    var n=arr3.length
    console.log(n)
    if(n%2==0){
      var x=(n+1)/2
    }
    else{
      var a=n/2
      var b=(n+1)/2
      var x=(a+b)/2
    }
    return x;
    }
    console.log(foo([1,2,3,4,5],[6,7,8,9,10]))