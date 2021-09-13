function carregar() {
  let mensagem = document.getElementById('mensagem')
  let imagem = document.getElementById('imagem')
  let hora = new Date()
  let horaAtual = hora.getHours()
  let minutoAtual = hora.getMinutes()

  mensagem.innerHTML = `São ${horaAtual} horas e ${minutoAtual} minutos`

  if (horaAtual >= 0 && horaAtual < 12) {
    imagem.innerHTML = 'Bom dia!'
    document.body.style.background = '#F5DA81'
  } else if (horaAtual >= 12 && horaAtual < 18) {
    imagem.innerHTML = 'Boa tarde!'
    document.body.style.background = '#FF8000'
  } else {
    imagem.innerHTML = 'Boa noite!'
    document.body.style.background = '#3B0B17'
  }
}
