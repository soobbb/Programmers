function solution(s) {
  // 문자열의 길이가 4 또는 6이 아니면 false를 반환
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  // 숫자로만 구성되어 있는지 확인
  if (!/^[0-9]+$/.test(s)) {
    return false;
  }

  return true;
}

// 예시
console.log(solution("a234")); // false
console.log(solution("1234")); // true
