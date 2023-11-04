function solution(price, money, count) {
  // 놀이기구를 count번 타게 되면 필요한 총 비용을 계산
  const totalCost = price * ((count * (count + 1)) / 2);

  // 현재 자신이 가지고 있는 금액에서 필요한 비용을 뺀 결과를 반환
  const shortfall = totalCost - money;

  return shortfall > 0 ? shortfall : 0;
}
