 /* const button = document.getElementsByTagName('button') [0] // somente pega a primeira posição.

const dolar = 5.2

const convert_value = () => {  // função para pegar o valor em reais para converter em dolar.
    const inputReal = document.querySelector('input').value  // .value-exibe somente o valor do input. 
    const realValueText = document.getElementById('realValueText')
    const currency_value_text = document.getElementById('currency-value-text')
   realValueText.innerHTML = inputReal // troca o valor do paragrafo no codigo html para o valor em real.
   realValueText.innerHTML =  new Intl.NumberFormat('pt-br',
  { style: 'currency',
     currency: 'BRL' }
).format(inputReal); // '$100.00'
    // currency_value_text.innerHTML = inputReal / dolar //arruma no html o valor em dolar

    currency_value_text.innerHTML = new Intl.NumberFormat('en-US',
  { style: 'currency',
     currency: 'USD' }
).format(inputReal / dolar); // '$100.00'
}

button.addEventListener('click', convert_value)  // ouvidor de enventos-quando ele é clicado a função é executada.

*/



 const button = document.getElementsByTagName('button') [0] // somente pega a primeira posição.
 const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 1.00

const convert_value = () => {  // função para pegar o valor em reais para converter em dolar.
    const inputReal = document.querySelector('input').value  // .value-exibe somente o valor do input. 
    const realValueText = document.getElementById('realValueText')
    const currency_value_text = document.getElementById('currency-value-text')
   // realValueText.innerHTML = inputReal // troca o valor do paragrafo no codigo html para o valor em real.

    realValueText.innerHTML =  new Intl.NumberFormat('pt-br',
    { style: 'currency',
        currency: 'BRL' }
    ).format(inputReal); // '$100.00'
        // currency_value_text.innerHTML = inputReal / dolar //arruma no html o valor em dolar

        if (select.value === 'U$$ Dolár americano'){
            currency_value_text.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency',
            currency: 'USD' }
        ).format(inputReal / dolar); // '$100.00'
        }
        
        if (select.value === '€ Euro'){
                currency_value_text.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency',
        currency: 'EUR' }
    ).format(inputReal / euro); // '€100.00'
        }
    }


changecurrency = () => { // verifica muitanças feitas no input para a parte de baixo.
    const currency_name = document.getElementById('currency-name')
    const currency_image = document.getElementById('image')
    if (select.value === '€ Euro'){ //este if troca a parte de html para Euro
        currency_name.innerHTML = "Euro"
        currency_image.src = "./assets/euro.svg"
    }

    if (select.value === 'U$$ Dolár americano'){
        currency_name.innerHTML = "Dolár americano"
        currency_image.src = "./assets/estados-unidos.svg"
    }
     if (select.value === 'R$ Real Brasileiro'){
        currency_name.innerHTML = "Real Brasileiro"
        currency_image.src = "./assets/brasil 2.svg"
    }
    convert_value() // chama esta funçaõ ao final da execução para fazer isso automaticamente
}

button.addEventListener('click', convert_value)  // ouvidor de enventos-quando ele é clicado a função é executada.
select.addEventListener('change',changecurrency) //pega as alteraçoes
