function tabuada () {
let numero = document.querySelector('input#txtn')
let select = document.querySelector('select#txtsel')

if (numero.value.length == 0){
  window.alert('Digite um número para continuar')
} else {
  let num = Number(numero.value)
  select.innerHTML =''
  numero.value = ''
  numero.focus()
  for (let pos = 1; pos <= 10; pos++){
    let item = document.createElement('option')
    item.text = `${num} X ${pos} = ${num*pos}` 
    select.appendChild(item)
  
    }
  }
}