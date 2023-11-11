function solution(s) {
  // 문자열을 공백을 기준으로 단어 배열로 분할
  const words = s.split(" ");

  // 각 단어별로 처리
  const result = words.map((word) => {
    // 단어를 배열로 분할하여 각 알파벳을 처리
    const modifiedWord = word
      .split("")
      .map((char, index) => {
        // 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 변경
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join(""); // 변경된 알파벳을 다시 단어로 조합
    return modifiedWord;
  });

  // 변경된 단어들을 공백을 넣어 다시 문장으로 조합하여 반환
  return result.join(" ");
}

// 예시
console.log(solution("hello world")); // 출력: "HeLlO WoRlD"
