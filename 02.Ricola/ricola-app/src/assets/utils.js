

// 랜덤 정수값 출력 함수
export function randomNumBetween(min, max){
    return Math.trunc(Math.random() * (max - min + 1)) + min;
    // Math.trunc()는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환한다. 
    // 즉, 단순하게 주어진 값이 양수이든 음수이든 상관없이 소수점 이하부분을 제거한다.
}