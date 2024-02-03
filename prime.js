var num=function(arr){
    var prime=true;
    for(var i=0;i<arr.length;i++)
    {
      prime=true;
      for(var j=2;j<=arr[i];j++)
      {
        if(arr[i]%j==0 && arr[i]!=j)
          {
            prime=false;
            break;
          }
        
        }
        if(prime){
        console.log("Prime");
         }
        else{
        console.log("Not prime");
        }
      }
      return num;
    }
    num([2,3,4,5])
    



    //arrow function
//Prime numbers in a array
var num=(arr)=>{
    var prime=true;
    for(var i=0;i<arr.length;i++)
    {
      prime=true;
      for(var j=2;j<=arr[i];j++)
      {
        if(arr[i]%j==0 && arr[i]!=j)
          {
            prime=false;
            break;
          }
        
        }
        if(prime){
        console.log("Prime");
         }
        else{
        console.log("Not prime");
        }
      }
      return num;
    }
    num([2,3,4,5])