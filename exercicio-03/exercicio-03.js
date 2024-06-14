function contagem () {
  let resultado = document.querySelector('div#resultado')
  let inicio = document.querySelector('input#txtinicio')
  let fim = document.querySelector('input#txtfim')
  let passo = document.querySelector('input#txtpasso')
  
  
  

  if (inicio.value.length == 0 || fim.value.length == 0 ){
    window.alert('Preencha os dados para continuar')
    resultado.innerHTML = '<strong>Impossível contar!</strong>'
  } else {
    resultado.innerHTML = '<p><strong>Contando...</strong></p>'

    let start = Number(inicio.value)
    let end = Number(fim.value)
    let step = Number(passo.value)

   if( passo.value.length == 0 || step > end){
    window.alert('Passo inválido. Consideraremos passo = 1')
    step = 1
  } if (start < end) {
      for (let i = start; i <= end; i += step){
        resultado.innerHTML += `<strong>${i}...\u{1F449}</strong>` 
      }
    } else {
    for (let i = start; i >= end; i -= step){
      resultado.innerHTML += `<strong>${i}...\u{1F449}</strong>`
    }
  }
 }
 resultado.innerHTML += `\u{1F3C1}`
}