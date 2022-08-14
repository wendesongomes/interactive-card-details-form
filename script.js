const form = document.getElementById('form');
const btn = document.getElementById('btn');

const cardName = document.getElementById('fName');
const cardNamep = document.querySelector('.details-name');

const cardNumber = document.getElementById('fNumber');
const cardNumberp = document.querySelector('.details-number-card');

const cardDateMM = document.getElementById('fDay');
const cardDateYY = document.getElementById('fMonth');
const cardDatep = document.querySelector('.details-date');

const cardCvc = document.getElementById('fCvc');
const cardCvcp = document.querySelector('.details-cvc');

const finishId = document.getElementById('container-finish');

const thanks = document.getElementById('thanks');
const thanksDetails = document.getElementById('thanks-details')
const img = document.getElementById('img-finish');
urlImg = "images/icon-complete.svg";

var erroBlank = "can't be blank";

function obrigatorio(varcard, varp){
  if(varcard.value == "" || varcard.value == null){
    varp.innerText = erroBlank;
    return false;
  } else {
    varp.innerText = "";
    return true;
  }
}

function confirm(){
  if(
    obrigatorio(cardName, cardNamep) &
    obrigatorio(cardNumber, cardNumberp) &
    obrigatorio(cardDateYY, cardDatep) &
    obrigatorio(cardDateMM, cardDatep) &
    obrigatorio(cardCvc, cardCvcp) &
    noChar(cardNumber, cardNumberp) &
    noChar(cardDateYY, cardDatep) &
    noChar(cardDateMM, cardDatep) &
    noChar(cardCvc, cardCvcp) 
  ) {
    finish();
  }
}

function finish(){
  finishId.style = "position: relative"
  form.remove();
  img.src = urlImg;
  btn.value = "Continue";
  thanks.innerText = "Thank you!";
  thanksDetails.innerText = "We've added your card details";
}

function noChar(inputID, textID){
  if(isNumber(inputID) == false){
    textID.innerText = "Wrong format, numbers only";
    return false;
  } else {
    return true;
  }
}

function isNumber(val){ 
  if(val.value != ""){
    val.value = val.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1');
    return /^-?\d+$/.test(val.value);
  }
}

//ESTUDAR BAIX
function formats(event,e){
    if(event.value.length<19){
      event.value = event.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }
  }
  
  function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
  }
// ESTUDAR CIMA

function verefication(inputID, textID, text){
    const input = document.getElementById(inputID);
    const texthtml = document.getElementById(textID);
    if(input.value == ""){
       texthtml.innerText = text;
    } else {
        texthtml.innerHTML = input.value;
    }
}

function modify(){
  verefication('fCvc', 'card-cvc', '000');
  verefication('fName', 'card-name', 'Jane Appleseed');
  verefication('fNumber', 'card-number', '0000 0000 0000 0000');
  verefication('fDay', 'card-date-YY', '00');
  verefication('fMonth', 'card-date-MM', '00');
}
