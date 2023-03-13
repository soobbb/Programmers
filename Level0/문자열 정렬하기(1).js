function solution(my_string) {
  return my_string
    .split("")
    .map(Number)
    .filter((ele) => !isNaN(ele))
    .sort((a, b) => a - b);
}

console.log(solution("hi12392"));

/*
1. split함수로 문자열을 배열로 바꿔 주고, [[
  'h', 'i', '1', '2', '3', '9','2']
2. map함수로 문자인 알파벳은 NaN으로 문자인 숫자는 Number타입으로 바꿔준다
[NaN, NaN, 1, 2,3,   9, 2]
3. filter함수와 isNaN함수로 NaN을 걸러준다.
[ 1, 2, 3, 9, 2 ]
4. sort함수로 오름차순으로 정렬해준다.
*/