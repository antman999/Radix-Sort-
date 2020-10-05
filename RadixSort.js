//************** Radix sort helper **************
//In order to implement radix sort it's helpful to build a few helpers first
//getDigit(num,place)-returns the digit in num at the given place value
//getDigit(12345,1) ==> 4
//            ^
//getDigit(12345,3) ==> 2
//          ^
// getDigit(12345,5) ==>0
//         ^

function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
	let numCounted = num.toString();
	if (numCounted.length == 0) return 1;
	return numCounted.length;
}

function mostDigits(arr) {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(arr[i]));
	}
	return maxDigits;
}

//*************Radix sort Pseudocode***********
//define a function that takes a list of nums 
//figure out how many digits the largest num has 
//loop from k=0 up to the largest number of digits
//for each iteration create buckets for each digit(0 to 9)
//place each number in the corresponding bucket based on its kth digit
//replace our exisitng array with values in our buckets starting with 0 and going to 9
//**********************************************


//************Radix sort solution**************
function radixSort(nums){
    let maxDigits = mostDigits(nums)
    // using maxDigits lets us only loop till thhe highest value of
    //nums in the arr [43,4343,3] ==> loop 4 times
    for(let k = 0; k < maxDigits; k++){ 
      let buckets = Array.from({length:10},()=>[]) // this will make 10 empty buckets of arrays 
     for(let i=0; i< nums.length; i++){
        let digit= getDigit(nums[i],k)// this is gonna return the certain digit at k place 2[6]7,1 ==> 6
        buckets[digit].push(nums[i])
        }
        nums=[].concat(...buckets)
       
    }
    return nums 
}

