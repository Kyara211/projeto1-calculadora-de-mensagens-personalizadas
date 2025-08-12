const nome = "Brayan"
let idade = 23
let anoAtual = 2025
let cidade = "Belo Horizonte"
let profissao = "Engenheiro Civil"
const anoNascimento = anoAtual - idade
let salario = 5000
let bonus = 1500
const salarioDoMes = salario + bonus 
let totalDoAno = salarioDoMes * 12
let totalAnual = totalDoAno * 2


alert(`======== RELATÓRIO DO USUÁRIO =========
Nome : ${nome}
Idade : ${idade}
Ano de nascimento : ${anoNascimento} 
Cidade : ${cidade}
Profissão : ${profissao}

Salário base : U$${salario}
Bônus : U$${bonus}
Total mensal : U$${salarioDoMes}
Total ano : U$${totalDoAno}
Total anual (salário dobrado) : U$${totalAnual}
===================================`)