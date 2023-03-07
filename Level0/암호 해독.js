function solution(cipher, code) {
  // for(i = code를 넣고 cipher.length만큼 돌리고 필요한 건 code의 배수니까 i+=code)
  // answer 값에 인덱스 0부터 시작이니 -1 넣자!
  var answer = "";

  for (let i = code; i <= cipher.length; i += code) {
    answer += cipher[i - 1];
  }
  return answer;
}
