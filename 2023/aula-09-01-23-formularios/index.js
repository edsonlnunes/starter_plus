function cadastrarDev(event){
    // para o comportamento do evento de submit (nao deixa a pagina atualizar)
    event.preventDefault() 

    const formulario = document.getElementById('formulario-cadastro')

    // criar um objeto com as informações
    // salvar o objeto no localStorage

    // => JSON

    // salvar no local storage
    localStorage.setItem('nomeCompleto', formulario.nomeCompleto.value)
    localStorage.setItem('email', formulario.email.value)
    localStorage.setItem('dataNascimento', formulario.dataNascimento.value)
    localStorage.setItem('telefone', formulario.telefone.value)
    localStorage.setItem('endereco', formulario.endereco.value)
    localStorage.setItem('areaAtuacao', formulario.areaAtuacao.value)
    localStorage.setItem('nivelSenior', formulario.nivelSenior.value)

    
    // console.log(formulario.nomeCompleto.value)
    // console.log(formulario.email.value)
    // console.log(formulario.dataNascimento.value)
    // console.log(formulario.telefone.value)
    // console.log(formulario.endereco.value)

    // console.log(formulario.areaAtuacao.value)
    // console.log(formulario.nivelSenior.value)
}

// formulario.nivelSenior.forEach(function (elemento) {
//     if(elemento.checked){
//         console.log(elemento)
//     }
// })