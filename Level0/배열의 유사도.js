function solution(s1, s2) {
  var res = s1.filter((x) => s2.includes(x));
  return res.length;
}

console.log(solution(["a", "b", "c"], [("com", "b", "d", "p", "c")]));
