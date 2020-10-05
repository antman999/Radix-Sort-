# Radix-Sort
##### Radix sort is a special sorting algorithm that works on lists of numbers, it never makes comparison like other sorting algorithms and exploits the fact that information about the size of a number is encoded in the number of digits 

## WORST CASE TIME COMPLEXITY O(nk)
#### n being the size of the list -> arr.length
#### k being the numbers of the digits -> 3443 -> 4

Creates buckets for numbers starting from the Right most side.
```
//[345,673,1,67,876,32,44,2,67,10]
//   ^   ^ ^  ^   ^  ^  ^ ^  ^  ^ 
//Creates a bucket and groups them based on the right most digit


//            2                           67
//10    1     32   673  44    345   876   67
//0  |  1  |  2  |  3 |  4  |  5  |  6  |  7  |  8  |  9  |

```
After the first loop it will repeat it until it hits the left most side so
Meaning the longer the digits like (738437843) is the amount of times it has to bucket them 

```
//then you form it back into a array or list using this same order above ^ 

// [10,1,32,2,673,44,345,876,67,67]
//then we repeat the process but now looking at the second digit to the right 876
//                                                                             ^
// 2                   345         67     876
// 1    10        32    44         67     673                                  
//0  |  1  |  2  |  3 |  4  |  5  |  6  |  7  |  8  |  9  |
//

```


```
//then you form it back into a array or list using this same order above ^

// [10,1,2,32,345,44,67,67,876,673]

//then we repeat the process but now looking at the second digit to the right 876
//                                                                            ^
// 67
// 67
// 44
// 32
// 10
// 2
// 1                345              673         876
// 0  |  1  |  2  |  3 |  4  |  5  |  6  |  7  |  8  |  9  |

// [1,2,10,32,44,67,67,345,673,876]

```

```
//In order to implement radix sort it's helpful to build a few helpers first
//getDigit(num,place)-returns the digit in num at the given place value 
//getDigit(12345,1) ==> 4
//            ^
//getDigit(12345,3) ==> 2
//          ^
// getDigit(12345,5) ==>0
//         ^  
```
### Radix sort Pseudocode 
```
//define a function that takes a list of nums 
//figure out how many digits the largest num has 
//loop from k=0 up to the largest number of digits
//for each iteration create buckets for each digit(0 to 9)
//place each number in the corresponding bucket based on its kth digit
//replace our exisitng array with values in our buckets starting with 0 and going to 9
//**********************************************
```

