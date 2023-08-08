#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {

    int total = (12000 * n) + (2000 * k) - ((n/10) * 2000);
    
    return total;
    }