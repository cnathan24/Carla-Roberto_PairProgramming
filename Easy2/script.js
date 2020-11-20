

function primeArr(arr) { 
   
    //Test for Prime Number 
    function isPrime(num) {
            if(num < 2) return false;
          
            for (let i = 2; i < num; i++){
              if( num % i === 0){
                return false;
              }
            }
            return true;
        }
   
     
    //Test for Prime Number 
   
    var newArr = [];  
     
    for(n=0; n<arr.length; n++){ 
      if(isPrime(arr[n])){ 
        newArr.push(arr[n]); 
      } 
    } 
     
    console.log(newArr); 
} 

primeArr([1,2,3,4,5,6,7,8,9,10])