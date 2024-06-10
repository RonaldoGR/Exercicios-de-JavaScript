function horario() {
  let msg = document.querySelector('div#text')
  let msg2 = document.querySelector('div#foto')
  let img = document.querySelector('img#imagem')
  let data = new Date ()
  let mes = data.getMonth()
  let dia =data.getDay()
  let numeroDia = data.getDate()
  let hora = data.getHours()
  let minutos = data.getMinutes()

  

    switch (dia) {
      case 0:
        dia = 'domingo'
        break;
      case 1:
        dia = 'segunda-feira'
        break;
      case 2:
        dia = 'terça-feira'
        break;
      case 3:
        dia = 'quarta-feira'
        break;
      case 4:
        dia = 'quinta-feira'
        break;
      case 5:
        dia = 'sexta-feira'
        break;
      case 6:
        dia = 'sábado'
        break;
      default:
        window.alert('Dia inválido') 
        break;           
    }

    switch (mes) {
      case 0:
       mes = 'janeiro'
        break;
      case 1:
       mes = 'fevereiro'
        break;
      case 2:
        mes = 'março'
        break;
      case 3:
        mes = 'abril'
        break;
      case 4:
        mes = 'maio'
        break;
      case 5:
        mes = 'junho'
        break;
      case 6:
        mes = 'julho'
        break;
      case 7:
        mes = 'agosto'
        break;
      case 8:
        mes = 'setembro'
        break;
      case 9:
        mes = 'outubro'
        break;
      case 10:
        mes = 'novembro'
        break;
      case 11:
        mes = 'dezembro'
        break;          
      default:
        window.alert('Mês inválido') 
        break;           
    }

    msg.innerHTML = `<p>Hoje é ${dia} ${numeroDia} de ${mes} e agora são ${hora} horas e ${minutos} minutos</p>`

    if (hora >= 6 && hora <= 12) {
      img.src = 'imagens/manha.png'
      msg2.innerHTML += '<p>Bom dia!</p>'
      document.body.style.background = '#a0d4f7a4'
    }
    else if (hora >= 13 && hora <= 18){
      img.src = 'imagens/tarde.png'
      msg2.innerHTML += '<p>Boa tarde!</p>'
      document.body.style.background = '#bf73108a'
    }
    else if (hora >= 19){
      img.src = 'imagens/noite.png'
      msg2.innerHTML += '<p>Boa noite!</p>'
      document.body.style.background = '#0d27388f'
    }
    else if (hora >= 0){
      img.src = 'imagens/madrugada.png'
      msg2.innerHTML += '<p>Boa madrugada!</p>'
      document.body.style.background = '#91521f98'
    }



}