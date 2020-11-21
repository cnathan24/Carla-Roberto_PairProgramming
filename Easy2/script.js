

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
   
     
    // Creates the new array
   
    let newArr = [];  
     
    for(let i=1; i <arr.length; i++){ 
      if(isPrime(arr[i])){ 
        newArr.push(arr[i]); 
      } 
    } 
     
    console.log(newArr); 
} 

primeArr([1,2,3,4,5,6,7,8,9,10]);
primeArr([10, 18, 19, 29, 33, 35, 47, 66, 83])