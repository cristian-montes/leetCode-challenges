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