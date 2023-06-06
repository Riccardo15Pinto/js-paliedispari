//check console log
console.log('ok js');

/*
PAROLA PALINDROMA
*/

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

    //creo una variabile usando la funzione
    const revertwords = getpalindromWord(wordresult);

    //creo una variabile d'appoggio
    let result = 'La Parola non è Palindroma'

    //se la rimane uguale
    if(wordresult === revertwords){
        result = 'La parola è Palindroma'
    } 

    //stampo in pagina
    textElement.innerText = result;

});

/*
PARI O DISPARI
*/

//Recupero elementi dal DOM

const choiceElement = document.getElementById('user-choice');
const numberElement = document.getElementById('number-user');
const startElement = document.getElementById('start-button');
const testElement = document.getElementById('result-test');