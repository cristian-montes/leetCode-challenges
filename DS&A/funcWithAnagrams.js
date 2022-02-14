function funcWithAnagrams(_texto) {
    for (var i = 0; i < texto.length; i++) {
        for (var j = texto.length - 1; j > i; j--) {
            var pointerOne = texto[i].split('').sort().join('');
            var pointerTwo = texto[j].split('').sort().join('');
            if (pointerOne === pointerTwo) {
                texto.splice(j, 1);
            }
        }
    }
    console.log(texto.sort());
    return texto.sort();
}
var texto = ['code', 'doce', 'ecod', 'framer', 'frame'];
funcWithAnagrams(texto);
