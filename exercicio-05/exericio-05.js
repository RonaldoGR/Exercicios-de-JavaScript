let valores = []
let num = document.querySelector('input#txtn')
let valor = document.querySelector('select#txtvalor')
let resultado = document.querySelector('div#res')


function validarNumero (n) {
  if (n >= 1 && n <= 100) return true
  else return false
}

function naLista (n,l){
  if (l.indexOf(n) != -1) return true
  else return false
}

function analisar () {
  if(validarNumero(Number(num.value)) && !naLista(Number(num.value),valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.innerHTML = `Valor ${num.value} adicionado`
    valor.appendChild(item)
    resultado.innerHTML = ''
    num.value = ''
    num.focus()
} else {
  window.alert('Número inválido ou já consta na lista')
  }
}

function calcular() {
 
  if (valores.length === 0) {
    window.alert('Adcione valores para continuar')
  } else {
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0 
  
    for( pos in valores){
      if (valores[pos] > maior){
        maior = valores[pos]
      } else if (valores[pos] < menor){
        menor = valores[pos]
      }
      soma += valores[pos]
    }

    let media = soma / valores.length
  
    resultado.innerHTML = `<p>Ao total foram adicionados ${valores.length} valores</p>`
    resultado.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
    resultado.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
    resultado.innerHTML += `<p>A soma de todos os valores foi ${soma}</p>`
    resultado.innerHTML += `<p>A média dos valores foi ${media.toFixed(2)}</p>`
  }
}