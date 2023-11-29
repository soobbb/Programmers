function solution(my_string) {
  var a = my_string.split("");
  console.log(a);
  var b = a.reverse();
  console.log(b);
  var c = b.join();
  console.log(c);
  return c;
}
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

console.log(solution("olleh"));
