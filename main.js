const apiKey = "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"

function EnviarMensagem(){
    var mensagem = document.getElementById('mensagem-enviada')
    if(!mensagem.value)
    {
        mensagem.style.border = '1px solid red'
        return
    }
        mensagem.style.border = 'none'

    var status = document.getElementById('status')
    var btnSubmit = document.getElementById('btnSubmit')

    status.style.display = 'block'
    status.innerHTML = 'Digitando...'
    btnSubmit.disable = true
    btnSubmit.style.cursor = 'not-allowed'
    mensagem.disable = true

    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: 'Bearer '+apiKey
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: mensagem.value,
            max_tokens: 2048,
            temperature: 0.5
        })

    })
    .then((response) => response.json())
    .then((response) => {
        let resposta = response.choices[0]['text']
        status.innerHTML = 'On-line'
        MostrarHistorico(mensagem.value,resposta)
    })
    .catch((e) =>{
        console.log('Error -> ', e)
    })
    .finally(() => {
        btnSubmit.disable = false
        btnSubmit.style.cursor = 'pointer'
        mensagem.disable = false
    })
}

function MostrarHistorico(message,response){
    var historico = document.getElementById("historico")

    //Mensagem Recebida para o GPT
    var CaixaMensagemRecebida = document.createElement('div')
        CaixaMensagemRecebida.className = 'CaixaMensagemRecebida'

    var MensagemRecebida = document.createElement('p')
        MensagemRecebida.className = 'MensagemRecebida'
        MensagemRecebida.innerHTML = message

        CaixaMensagemRecebida.appendChild(MensagemRecebida)
        historico.appendChild(CaixaMensagemRecebida)



    //Resposta recebida do GPT
    var CaixaRespostaGPT = document.createElement('div')
        CaixaRespostaGPT.className = 'CaixaRespostaGPT'

    var RespostaGPT = document.createElement('p')
        RespostaGPT.className = 'RespostaGPT'
        RespostaGPT.innerHTML = response

      CaixaRespostaGPT.appendChild(RespostaGPT)
      historico.appendChild(CaixaRespostaGPT)

      historico.scrolltop = historico.scrollHeight

}