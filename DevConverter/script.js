const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real')

const selectedCurrency = document.getElementById('currency')

const result = document.getElementById('result')

function handleSubmit(e){
    e.preventDefault();
    if(!inputValue.value || inputValue.value<0){
        alert('Informe um valor válido');
        return;
    }
    else if(!selectedCurrency.value){
        alert('Escolha uma moeda!');
    }
}