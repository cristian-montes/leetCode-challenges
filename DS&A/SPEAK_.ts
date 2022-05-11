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