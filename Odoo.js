// Problem 1:
// Given an amount in dollars and a tax percentage. Return an array with the tax amount in cents.

function taxAmount(dollars, taxPercentage){
    taxAmountInDollars = dollars * taxPercentage/100;
    taxAmountInCents = [taxAmountInDollars * 100];

    return taxAmountInCents 
}


// Problem 2:
// Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that shuffles the deck using the randint function. 
// The random module includes a basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints). 

// Example: 
// Input deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'].
// Output = ['Q',K,2,3,4,5,6,7,8,9,10,'1','A','J'] or can be in any shuffled order

function shuffleDeck(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    return deck
}
// deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q']
// shuffleDeck(deck);

// Problem 3:
// Given a string s, return the sum of the vowels in the string if each vowel's weight increases by 1 according to the vowels order. 
// Example:  
// Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5  
// Output = 22 (1 a's = 1*1 = 1 +    3 e's = 3*2 = 6  +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)

function findWieghtOfVowels(s){
    let vowelsMap = {};
    let totalVowelSum = 0;
    for(let i = 0; i < s.length; i++){
        if(!vowelsMap[s[i]]){
            vowelsMap[s[i]] = 0;
        }

        if (s[i] === 'a') vowelsMap[s[i]]++;
        if (s[i] === 'e') vowelsMap[s[i]] = vowelsMap[s[i]] + 2;
        if (s[i] === 'i') vowelsMap[s[i]] = vowelsMap[s[i]] + 3;
        if (s[i] === 'o') vowelsMap[s[i]] = vowelsMap[s[i]] + 4;
        if (s[i] === 'u') vowelsMap[s[i]] = vowelsMap[s[i]] + 5;
    }

    for(property in vowelsMap){
        totalVowelSum = totalVowelSum + vowelsMap[property]
    }
    
    return totalVowelSum;
}

s = "Welcome to Indonesia";
findWieghtOfVowels(s);