// First task
const rate = 40;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} dollars is equal to ${i * rate} UAH`);
}

// Second Task
const num = 14;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

// Third task
const powerNum = 81;
let isPowerOfThree = false;

for (let i = 1; i <= powerNum; i *= 3) {
  if (i === powerNum) {
    isPowerOfThree = true;
    break;
  }
}

console.log(isPowerOfThree);
