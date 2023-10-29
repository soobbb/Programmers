function solution(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 1) {
    return s.charAt(middle); // 문자열에서 특정 인덱스에 있는 문자를 반환하는 역할
  } else {
    return s.slice(middle - 1, middle + 1);
  }
}

// 테스트
console.log(solution("abc")); // "b"
console.log(solution("abcd")); // "bc"
