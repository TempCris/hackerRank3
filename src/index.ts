/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function aVeryBigSum( ar: number[] ) {
  const longitud = ar.length 
  let  sum= 0
  for (let i = 0; i < longitud; i++) {
    sum += ar[i]; 
  }
  
  return sum;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [5,1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
  const result = aVeryBigSum(testArray);
  console.log('Result: ', result);
}

main();
