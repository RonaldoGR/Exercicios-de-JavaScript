function sequencia (){
 let fibonacci = window.document.querySelector("input#fibotxt")
 let sequencia = window.document.querySelector("div#sequencia")
 let f1 = 0
 let f2 = 1
 let f3 = 0
 let fibo = Number(fibonacci.value)

  
 
  if (fibo === 0 || fibo < 0){
    window.alert('Digite um número válido para continuar')
  } else {
   sequencia.innerHTML = ''
 
    fibonacci.value =''
    fibonacci.focus()
  
    for (let c = 1; c <= fibo; c++){
      f3 = f1 + f2
      f1 = f2
      f2 = f3

      sequencia.innerHTML += (`${f2}`+ " ")
    
    }
  }  
}