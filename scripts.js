function verificar() {
    let sLeft = Number(document.querySelector('input#sLeft').value)
    let sRight = Number(document.querySelector('input#sRight').value)
    let cLeft = Number(document.querySelector('input#cLeft').value)
    let cRight = Number(document.querySelector('input#cRight').value)
    let out = document.querySelector('div#out')

    if ((cLeft == 0 && cRight == 0) && ((sLeft >= -12 && sRight >= -12) && (sLeft <= -3 && sRight <= -3))) {
        out.innerHTML = 'Lentes <strong>Prime</strong>'
        } else if (((cLeft <= 0 && cRight <= 0) && (cLeft >= -2 && cRight >= -2)) && ((sLeft >= -10 && sRight >= -10) && (sLeft <= -3 && sRight <= -3))) {
            out.innerHTML = 'Lentes <strong>Prime</strong>'
        } else if ((cLeft >= -5 && cRight >= -5) && ((sLeft >= -15 && sRight >= -15) && (sLeft <= 0 && sRight <= 0))) {
        out.innerHTML = 'Lentes <strong>Vision</strong>'
    } else {
        out.innerHTML = '<p>Lente não encontrada!</p>'
        out.innerHTML += '<p>Verifique os valores digitados!</p>'
    }
}
