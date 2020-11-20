'use strict';


function anagramComp (string1, string2) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    string1 = string1.replace(/[^\w]/g, '').toLowerCase()
    string2 = string2.replace(/[^\w]/g, '').toLowerCase()

    /*This function sorts the strings*/ 
    function sortString(string) {
        return string.split('').sort().join('');
    }

    if(sortString(string1) === sortString(string2)){
        console.log("It is an anagram")
    } else {
        console.log("It is not an anagram")
    }
    
};



anagramComp("So dark the con of man","Madonna of the Rocks");
anagramComp("Things are good","Dogs eat ants");

// the .split split the words and it creates an array
// the .sort sorts an array alphabetically 
// the .join joins the array elements back together into a single string










