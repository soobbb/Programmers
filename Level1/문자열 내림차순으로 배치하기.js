function solution(s) {
  // 문자열을 배열로 변환 후 정렬
  const sortedArray = s.split("").sort((a, b) => {
    if (a > b) return -1; // 큰 문자가 앞에 오도록 정렬
    if (a < b) return 1; // 작은 문자가 뒤에 오도록 정렬
    return 0;
  });

  // 배열을 다시 문자열로 변환
  const sortedString = sortedArray.join("");

  return sortedString;
}

// 예제 호출
const s = "Zbcdefg";
const result = solution(s);
console.log(result); // 결과 출력: "gfedcbZ"
