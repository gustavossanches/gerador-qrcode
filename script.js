    const input = document.querySelector('input')
    const imagem = document.querySelector('img')

    window.onload = () => {
        imagem.style.display = 'none'
    }

    function gerar() {
        if (input.value) {
            imagem.style.display = 'inline'

            imagem.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + input.value

        } else {
            window.alert('Digite algo!')
        }
    }

    function reset() {
        input.value = ''
        imagem.style.display = 'none'
    }
