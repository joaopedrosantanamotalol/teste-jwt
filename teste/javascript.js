const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', () => {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    const dados = { "usuario": usuario ,
    "senha": senha
    };

    const json = JSON.stringify(dados);
    const arquivoJSON = 'https://6812562489a6973c52628b3b--graceful-horse-aeb232.netlify.app/banco.json'; // nome do arquivo JSON

   fetch(arquivoJSON, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: json
   })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});