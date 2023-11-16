
function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }

        if (s[i] >= 'a' && s[i] <= 'z') {
            charCode = (charCode - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0);
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            charCode = (charCode - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0);
        }

        answer += String.fromCharCode(charCode);
    }

    return answer;
}

// 예시 사용법
const originalString = "AB";
const distance = 1;
const encryptedString = solution(originalString, distance);
console.log(encryptedString); // 결과 출력
