//Rotate an array by k times

function foo(arr,k){
    for(var i=0;i<k;i++)
    {
      arr.unshift(arr.pop());
    }
    return arr;
    }
    console.log(foo([1,2,3,4,5],2))