// 사용 방법: setTimeout(실행함수, ms단위의시간)

// setTimeout(function () {
//   console.log("재미있다!");
// }, 1000);

// setInterval(반복실행함수, ms단위의시간), 0이 아닌 정수 값 ID를 반환
// setInterval(function () {
//   console.log("안녕!");
// }, 500);

// clearInterval
const button = document.querySelector("button");

let timer;
timer = setInterval(function () {
  console.log("안녕");
}, 1000);
console.log(timer); // id값 반환

button.addEventListener("click", function () {
  clearInterval(timer);
});
