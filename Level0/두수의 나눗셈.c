#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    double res = (double) num1 / num2;
    res = res * 1000;
    return (int)res;
}