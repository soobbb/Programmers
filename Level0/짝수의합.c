#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int res = 0;
    
    for(int i = 0; i <= n; i++){
        if((i) % 2 == 0)
            res += i;
        }
    return res;
    }