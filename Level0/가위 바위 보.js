function solution(rsp) {
  // rsp 매개변수가 가위 2 -> 바위 0 / 바위 0 -> 보 5일 / 보 -> 가위 2
  var answer = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i].includes(2)) answer += "0";
    else if (rsp[i].includes(0)) answer += "5";
    else answer += "2";
  }
  return answer;
}
