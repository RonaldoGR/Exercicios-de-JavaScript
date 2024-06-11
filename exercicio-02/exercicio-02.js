function verificar () {
  let anonasc = document.querySelector('input#txtano')
  let radsex = document.getElementsByName('radsex')
  let resultado = document.querySelector('div#res')
  let data = new Date ()
  let anoatual = data.getFullYear()
  let idade = anoatual - Number(anonasc.value)

  if (anonasc.value.length === 0 || anonasc.value > anoatual){
    window.alert('Preencha seus dados para continuar!')
  } else {

    var img = document.createElement('img')
    img.setAttribute('src','foto')
    let genero =''
    let tipo = ''
  
    if (radsex[0].checked){
      genero = 'homem'  
      if (idade >= 0 && idade <= 3){
        tipo = 'bebê'
        img.setAttribute('src', 'imagens/bebeh.png')
      }  else if (idade <= 12){
         tipo = 'criança'
         img.setAttribute('src', 'imagens/criancah.png')
      } else if (idade <= 17){
        tipo = 'adolescente'
        img.setAttribute('src','imagens/hadolescente.png')
      }  else if (idade <= 59) {
        tipo = 'adulto'
        img.setAttribute('src', 'imagens/homem.png')
      } else {
        tipo = 'idoso'
        img.setAttribute('src', 'imagens/idoso.png')
      } 

  
  } else {
    genero = 'mulher'
    if (idade >= 0 && idade <= 3){
      tipo = 'bebê'
      img.setAttribute('src', 'imagens/bebem.png')
    }  else if (idade <= 12){
       tipo = 'criança'
       img.setAttribute('src', 'imagens/criancam.png')
    } else if (idade <= 17){
      tipo = 'adolescente'
      img.setAttribute('src','imagens/madolescente.png')
    }  else if (idade <= 59) {
      tipo = 'adulta'
      img.setAttribute('src', 'imagens/mulher.png')
    } else {
      tipo = 'idosa'
      img.setAttribute('src', 'imagens/idosa.png')
    } 

  }

  resultado.innerHTML = `<br>Detectamos ${genero} ${tipo} de ${idade} anos</br>`
  resultado.appendChild(img)
  resultado.style.textAlign = 'center'
}




}