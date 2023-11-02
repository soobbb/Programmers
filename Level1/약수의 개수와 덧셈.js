function solution(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    // 약수의 개수를 구하는 함수를 호출하여 약수의 개수가 짝수인지 홀수인지 판단
    if (countDivisors(num) % 2 === 0) {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
}

// 숫자의 약수 개수를 구하는 함수
function countDivisors(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
}
