// 344. Reverse String

function reverseString(s: string[]): void {

    let n = s.length-1;
    
    
    for (let i = 0; i <= n/2; i++){
        let copyOfCurrentIndex = s[i] 
    
        s[i] = s[n-i]
        s[n-i] = copyOfCurrentIndex;
    
    };

    console.log('reversed S', s)
};

//520. Detect Capital
function detectCapitalUse(word: string): boolean {
    const restOfString = word.slice(1)
    
    if(word.toUpperCase() === word){
        return true;
    } else if(word.toLowerCase() === word){
        return true;
    } else if(word[0] === word[0].toUpperCase() && restOfString === restOfString.toLowerCase()){
        return true;
    } else {
        return false
    }
};

//01. Two Sum
function twoSum(nums: number[], target: number): number[] {
    
    let theMatch:  number[] = [];
    
    for (let i = 0; i <= nums.length; i++){
        
        for(let j = 1; j <=nums.length; j++){
            let sum = nums[i] + nums[j]
            if(sum === target && i !== j){
          
                theMatch = [i, j]
                return theMatch
            }
        };
    };
    
    return theMatch;
 
};