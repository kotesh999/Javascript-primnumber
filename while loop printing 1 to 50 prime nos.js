
let number = 2;
while (number <= 50) {
    let isPrime = true, i = 2;
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) { isPrime = false; break; }
        i++;
    }
    if (isPrime) document.write(number + "<br>");
    number++;
}

