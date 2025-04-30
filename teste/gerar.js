const fs = require('fs');
const jwt = require('jsonwebtoken');

// 1. Ler o arquivo JSON
const dadosLogin = JSON.parse(fs.readFileSync('banco.json', 'utf8'));

// 2. Chave secreta (use algo mais seguro em produção)
const chaveSecreta = 'u7*Qz!29hdA@3#kdL%vD9m';

// 3. Gerar o JWT
const token = jwt.sign(dadosLogin, chaveSecreta, { algorithm: 'HS256' });

// 4. Mostrar o token
console.log('Token JWT:');
console.log(token);

try {
    // Validar e decodificar o token
    const dadosDecodificados = jwt.verify(token, chaveSecreta);
    
    // Mostrar os dados decodificados (payload)
    console.log('Dados decodificados do token:', dadosDecodificados);
  } catch (erro) {
    console.error('Erro na validação do token:', erro.message);
  }