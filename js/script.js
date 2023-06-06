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
    //recupero il valore inserito dall'utente
    const wordresult = resultElement.value.trim();
    console.log(wordresult.length);

    //faccio un controllo
    if(wordresult.length <= 1){
        alert('I Caratteri inseriti non sono sufficienti');
        return
    }
});