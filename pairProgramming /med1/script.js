


var name = prompt('Please Type in a Letter');


function vowelChecker() {
    if(name=== 'a' && `e` && `i` && `o` && `u`) {
	console.log('Yes, this is a vowel!');
} 


else if (name==='y') { 
    console.log('It is occasionally a vowel.');
} 


else{
    console.log('Nope, not a vowel! Try again.');
}

}

vowelChecker() ;
