function funcWithAnagrams(_texto:string[]):string[]{

    for(let i = 0; i<texto.length; i++){
        for(let j = texto.length-1; j>i; j--){

            let pointerOne = texto[i].split('').sort().join('');
            let pointerTwo = texto[j].split('').sort().join('');

            if(pointerOne === pointerTwo){
                texto.splice(j, 1);
            }
        }
    }

    console.log(texto.sort());
    return texto.sort();
}


let texto= ['code', 'doce', 'ecod', 'framer', 'frame']
funcWithAnagrams(texto)