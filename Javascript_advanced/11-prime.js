function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
    console.log(count);
  }
}
for (let k = 0; k <= 100; k++) {
  countPrimeNumbers();
}
setTimeout(() => {
  let timing = performance.now();
  console.log(
    `Execution time of calculating prime numbers 100 times was ${timing} milliseconds.`
  );
}, 0);
