//Iteración #2: Buscar la palabra mas larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
 let longestWord =""
 param.forEach(hero, index => {
    hero.length >longestWord.length
    ?(longestWord=hero)
    :(longestWord=longestWord)
    
 });
 console.log(longestWord);
};
