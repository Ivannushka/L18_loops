//Task 1

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
     console.log('Fizz Bazz')
    } else if (i % 2 === 0) {
 console.log('Fizz');
} else if (i % 3 === 0) {
console.log('Bazz');
 } else {
    console.log(i);
 }
}

// Task 2

let numbr = 1000;
while (numbr >= 50) {
    if (numbr % 2 === 0) {
        console.log(numbr, ' is even number');
    } else {
        console.log(numbr, 'is odd number');
    }
numbr -= 7;
}
