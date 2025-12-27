function list(str) {
    let num = str.split(' ').map(Number)
     return Math.max(num)

};

console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")); //"-123 666"

console.log(list("-16 12 -100 5 100 12")); //"-100 100"

console.log(list("-1 2 3 4 -6 66 10")); //"-100 100"