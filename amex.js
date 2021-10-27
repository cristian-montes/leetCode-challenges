//290 WORD PATTERN
function wordPattern(pattern, s){
// if s and pattern do not have the same length return false. 
const word = s.split(' ');

if( word.length !== pattern.length) return false;
//create a map for patter.
const mapWord = new Map();

//create a map for word.
const mapPattern = new Map();


// iterate through pattern (for loop)
    for(let iN = 0; iN < pattern.length; iN++){

        //grab values from patter
        const patternVal = pattern[iN];

        //grab values from word
        const wordVal = word[iN];

        // check if  mapPatter have and wordPattern have the same values OR  mapPattern had && mapPattern get are not equal to word OR wordPattern has && wordPattern get is not equal to pattern --> return false.
        if((mapPattern.has(patternVal) !== mapWord.has(wordVal)) || (mapPattern.has(patternVal) && mapPattern.get(patternVal) !== wordVal) || (mapWord.has(wordVal) && mapWord.get(wordVal) !== patternVal)){
           
            console.log(false);
            return false;
        }
         // set mapPatter to patterkeys =  word values
         mapPattern.set(patternVal, wordVal);

         // set mapWords to wordkeys =  patter values. 
         mapWord.set(wordVal, patternVal);

    }
    console.log(true);
    return true


}

// pattern = "abba", s = "dog cat cat dog"
// wordPattern(pattern, s);

//197. Rising Temperature - MS SQL SERVER
`SELECT W2.Id AS Id
FROM Weather w1
JOIN Weather w2 ON DATEDIFF(DAY, W1.RecordDate, W2.RecordDate) =1
AND W2.Temperature > W1.Temperature;
`

//219. Contains Duplicate II
var containsNearbyDuplicate = function(nums, k) {
    let mappy = new Map();
    for(let i = 0; i < nums.length; i++){
        let current  = nums[i];
        if(mappy.has(current) && i - mappy.get(current) <= k){
            console.log(true);
            return true;
        }else{
            mappy.set(current, i);
        }
    }
    console.log(false);
    return false;
};

// nums = [1,2,3,1,2,3], k = 2
// containsNearbyDuplicate(nums, k)

//258. Add Digits
var addDigits = function(num) {
 if(num <=9) return num;

 return num- (Math.floor(num/9)) * 9 || 9;
};

num =934;
addDigits(num)


//415. Add Strings
var addStrings = function(num1, num2) {
    let arr = [];
    if(num1.length>0){
        arr.push(num1);
    }

    if(num2.length>0){
        arr.push(num2);
    }
    let sum = Number(arr[0] + Number(arr[1]));
    // let sum = arr.reduce((a,b) => Number(a) + Number(b));
    console.log(sum);
     return sum.toString();
};

num1 = "9333852702227987", num2 = "85731737104263"




addStrings(num1, num2);