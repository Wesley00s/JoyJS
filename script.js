function carregar() { 
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.png'
        document.body.style.background = '#D5C1AF'
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#FE7700'
    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#9D3F58'
    }
}
