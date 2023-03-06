

var inputNumero = document.getElementById('numInput');

var arrayRes = document.getElementById('tabela');
var res = document.getElementById('res');
var testeArray = []
var somaTeste = 0

function adicionaNumero(){
    var numeroReal = Number(inputNumero.value)
    if(inputNumero.value.length == 0 || inputNumero.value<1 || inputNumero.value>100){
        window.alert('[ERRO] digite um numero entre 1 e 100');

    }else{
        if(testeArray.includes(numeroReal)){
            window.alert('[ERRO] numero já inputado!');
        }else{
            res.innerHTML=''
        arrayRes.innerHTML+= `<option value="">${inputNumero.value}</option>`
        testeArray.push (Number (inputNumero.value));
        }
         
    }
    inputNumero.value = ''
    inputNumero.focus
    console.log(testeArray) 
}

function finalizar(){
    if(testeArray.length==0){
        window.alert('[ERRO] insira dados antes de finalizar');
    }else{
      
     
            for(var c = 0;c < testeArray.length; c++){
                somaTeste+= testeArray[c]
           
            }

            res.innerHTML=`Ao todo, temos ${testeArray.length} numeros cadastrados`

            var maiorNumero = (Math.max.apply(null, testeArray))
            res.innerHTML+= `<p> O maior valor informado foi: ${maiorNumero} </p>`
            var menorNumero = (Math.min.apply(null, testeArray))
            res.innerHTML+= `<p> O menor valor informado foi: ${menorNumero} </p>`

            res.innerHTML+= `<p>Somando todos os valores, temos: ${somaTeste}</p>`
            var mediaArray = somaTeste/testeArray.length
            res.innerHTML+=`<p> a média dos valores é: ${mediaArray}`
           
        }
        
    
    }
        
            
          
         



