#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// sides_len은 배열 sides의 길이입니다.
int solution(int sides[], size_t sides_len) {
    int answer = 0;
    int temp;
    
    for(int i = 0; i < sides_len -1; i++){
        for(int j = 0; j < sides_len -1 -i; j++){
            if(sides[j] < sides[j+1]){
                temp = sides[j];
                sides[j] = sides[j+1];
                sides[j+1] = temp;
            }
        }
    }
            if(sides[0] >= sides[1] + sides[2])
                return 2;
            else if(sides[0] < sides[1] + sides[2])
                return 1;
}