'use strict';
const input=document.getElementById('input');
const btnTranslate=document.getElementById('btn-translate');
const output=document.getElementById('output');
const languages=document.getElementById('languages');




const translate=async function (){ 
    const inputText=input.value;
    const languages='minion,yoda,groot';

    if(inputText==='' || inputText===null){
        alert('Input text is mandatory');
    }
    else{
        const url=`https://api.funtranslations.com/translate/languages.json?text=${inputText}`;
        const data=await fetch(url);
        const result=await data.json();

        output.innerHTML=result.contents.translated;
    }

};

const checkKey=function (e){
    if(e.key==='Enter'){ 
        translate();
    }
}; 
btnTranslate.addEventListener('click', translate);
document.addEventListener('keydown', checkKey);
languages.addEventListener('click', translate);
