//check console log
console.log('ok js');

//recupero elementi dal DOM
const textElement = document.getElementById('user-result');
const resultElement = document.getElementById('user-answer');
const buttonElement = document.getElementById('button');

// creo una funzione
function getpalindromWord(word){
    const revertWord = word.split('').reverse('').join('');
    return revertWord;
}

//al click del bottone
buttonElement.addEventListener('click', function(){
    
});