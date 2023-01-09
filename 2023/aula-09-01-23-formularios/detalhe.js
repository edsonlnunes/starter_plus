function carregarInformacoes(){
    const divInfos = document.getElementById('informacoes')

    const elementoP = document.createElement('p')

    elementoP.innerHTML = `
    <strong>Nome:</strong> ${localStorage.getItem('nomeCompleto')}, <br/>
    <strong>E-mail:</strong> ${localStorage.getItem('email')}, <br/>
    <strong>Telefone:</strong> ${localStorage.getItem('telefone')}, <br/>
    <strong>Endereço:</strong> ${localStorage.getItem('endereco')}, <br/>
    <strong>Dt. Nascimento:</strong> ${localStorage.getItem('dataNascimento')}, <br/>
    <strong>Área de atuação:</strong> ${localStorage.getItem('areaAtuacao')}, <br/>
    <strong>Senioridade:</strong> ${localStorage.getItem('nivelSenior')}
    `;

    // <p> Nome: Edson </p>

    divInfos.appendChild(elementoP)
}