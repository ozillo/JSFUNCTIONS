//Iteración #1: Buscar el máximo

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        console.log("numberOne")
        return numberOne
    }
    else {
        console.log("numberTwo")
        return numberTwo
    }
   
  };
const result= sum(3,6);
console.log(result);

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
