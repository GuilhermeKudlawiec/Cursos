function clicar() {
    var textuser = window.document.getElementById('textuser')
    var textuser = String(textuser.value)
    var imgjogo = window.document.getElementById('imgjogo')
    switch (textuser) {
        case "The Last of Us":
            imgjogo.src = 'imagens/ellie.jpg'
        break
        case 'God of War':
            imgjogo.src = 'imagens/kratos.jpg'
        break
        case 'The Witcher 3':
            imgjogo.src = 'imagens/geralt.jpg'
        break
        default:
            alert('Jogo inválido...')
        break
    }
}