const inputCep = document.querySelector('.input-cep')
const sendButton = document.querySelector('.send-cep')
const container = document.querySelector('.container-info')
const rua = document.querySelector('.rua')
const bairro = document.querySelector('.bairro')
const cidade = document.querySelector('.cidade')

sendButton.addEventListener('click', function(e) {
    e.preventDefault()

    const cep = inputCep.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const buscaCep = fetch(url)
    buscaCep
    
    .then(r => {
        return r.json()
    })

    .then(r => {
        const ruaCep = r.logradouro;
        const bairroCep = r.bairro;
        const localidadeCep  = r.localidade;

        fazerBusca(ruaCep, bairroCep, localidadeCep)
    })
    
    function fazerBusca(ruaParam, bairroParam, localidadeParam) {
        rua.textContent = '';
        bairro.textContent = '';
        cidade.textContent = '';

        rua.textContent += ruaParam;
        bairro.textContent += bairroParam;
        cidade.textContent += localidadeParam
    }

    console.log(cep)
})