//const str = 'TOWNE';
//If we rearrange this string, we can find two number names in it 2 (TWO) and 1 (ONE).
//Therefore, we expect an output of 21

const str = 'TOWNE';
const findNumber = (str = '') => {
   function stringPermutations(str) {
      const res = [];
      if (str.length == 1) return [str];
      if (str.length == 2) return [str, str[1]+str[0]];
      str.split('').forEach((chr, ind, arr) => {
         let sub = [].concat(arr);
         sub.splice(ind, 1);
         stringPermutations(sub.join('')).forEach(function (perm) {
            res.push(chr+perm);
         });
      });
      return res;
   }
   const legend = {
      'ONE': 1, 'TWO': 2, 'THREE': 3, 'FOUR': 4,
      'FIVE': 5, 'SIX': 6, 'SEVEN': 7, 'EIGHT': 8,
      'NINE': 9, 'ZERO': 0
   };
   const keys = Object.keys(legend);
   const res = {};
   const resArr = [];
   let result = '';
   keys.forEach(key => {
      const match = stringPermutations(key).find(el => el.split('').every(char => str.includes(char)));
      if(match){
         const index = str.indexOf(match[0]);
         if(!res.hasOwnProperty(key)){
            res[key] = [index];
         }else if(!res[key].includes(index)){
            res[key].push(index);
         };
      };
   });
   Object.keys(res).forEach(word => {
      resArr.push([word, ...res[word]]);
   });
   resArr.sort((a, b) => a[1] - b[1]);
   resArr.forEach(sub => {
      result = result + String(legend[sub[0]]).repeat(sub.length - 1);
   });
   return +result;
};
console.log(findNumber(str));