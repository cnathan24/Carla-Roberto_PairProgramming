'use strict';
let vowelsInput = "";

function vowelChecker() {
    while (vowelsInput !== "a",'e','i','o','u','y'){
        vowelsInput = prompt('Please Type in a Letter').toLowerCase();    
        if(vowelsInput==='a'|| vowelsInput==='e'||vowelsInput==='i'|| vowelsInput==='o'|| vowelsInput==='u') {
            console.log('Yes, this is a vowel!');
            break;
            } else if (vowelsInput === 'y') { 
            console.log('It is occasionally a vowel.');
            break;
            } else {
            console.log('Nope, not a vowel! Try again.');
            
        };
    };
};

vowelChecker() ;
