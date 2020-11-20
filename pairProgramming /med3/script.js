const a = 760;
const b = 140;


function gdc_two_numbers (a,b) {
    let gcf;
    for (var i = 1; i<= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcf = i;
        }
    }
    return gcf;
}

console.log(gdc_two_numbers(a,b));