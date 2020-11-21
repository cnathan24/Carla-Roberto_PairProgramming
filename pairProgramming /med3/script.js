'use strict';


function gdc_two_numbers (a,b) {
    let gcf;
    for (var i = 1; i<= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcf = i;
        }
    }
    console.log(gcf);
}

gdc_two_numbers(336,360);
gdc_two_numbers(78,126);
