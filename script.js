const form = document.getElementById('form');
const btn = document.getElementById('btn');

const cardName = document.getElementById('fName');
const cardNamep = document.querySelector('.details-name');

const cardNumber = document.getElementById('fNumber');
const cardNumberp = document.querySelector('.details-number-card');

const cardDateMM = document.getElementById('fDay');
const cardDateYY = document.getElementById('FMonth');

const cardCvc = document.getElementById('fCvc');

//finish
const thanks = document.getElementById('thanks');
const thanksDetails = document.getElementById('thanks-details')
const img = document.getElementById('img-finish');
urlImg = "images/icon-complete.svg";

const erroBlank = "can't be blank";

function confirm(){
    if(cardName.value != ""){
        cardNamep.innerText = erroBlank;
        if(cardNumber.value != ""){
          cardNumberp.innerText = erroBlank;
        }
    }
}

function finish(){
  form.remove();
  img.src = urlImg;
  btn.innerText = "Continue";
  thanks.innerText = "Thank you!";
  thanksDetails.innerText = "We've added your card details";
}

//estudar isso
function formats(ele,e){
    if(ele.value.length<19){
      ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }else{
      return false;
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
