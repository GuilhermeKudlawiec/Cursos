function carregar() {
    var img = window.document.getElementById('imagem')
    var hora = new Date()
    var hora_atual = hora.getHours()
    var msg = window.document.getElementById('msg')
    hora_atual = 19
    if (hora_atual <= 12) {
        img.src = "fotomanha.jpg"
        msg.innerHTML = 'BOM DIA!'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora_atual > 12 && hora_atual <= 18) {
        img.src = "fototarde.jpg"
        msg.innerHTML = 'BOA TARDE!'
        window.document.body.style.background = '#b9846f'
    } else {
        img.src = "fotonoite.jpg"
        msg.innerHTML = 'BOA NOITE'
        window.document.body.style.background = '#515154'

    } 
}