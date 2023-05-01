function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}

let str = "pPoooyY";

let strread = str.split("");
console.log(strread);
// return s.match(/p/ig).length == s.match(/y/ig).length
