

const myArray = [11,12,13,14,15,16,17,18,19,20,21,22];

const even = function (num) {
    return num % 2 === 0;
    };

    var myEvenArray = myArray.filter(even);


const odd = function (num) {
    return num % 2 === 1;
    };

    var myOddArray = myArray.filter(odd);


console.log(myEvenArray);
console.log(myOddArray);

