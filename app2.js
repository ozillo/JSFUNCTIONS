//Iteración #2: Buscar la palabra mas larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
 let longestWord =""
 param.forEach(hero => {
    hero.length>longestWord.length
    ? longestWord=hero
    : longestWord=longestWord
    
 });
 return longestWord;
};
console.log(findLongestWord(avengers));
