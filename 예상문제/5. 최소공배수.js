// 최대 공약수
let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
};

// 최소 공배수
let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};


// 최대 공약수
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// 최소 공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(4, 6));
console.log(lcm(3, 5));

