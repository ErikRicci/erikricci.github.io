$(document).ready(function () {
    
});


//Precisamos, antes de tudo, fazer um request pro banco. Nesse request, conferimos se existe alguma
//conta com o email desejado.
//Se o email já existir, ele avisa. Se não existir, ele cria a conta.

//COISAS A SE CONFERIR:
// - Nome não contém caracteres inválidos (números, caracteres especiais, etc)
// - Email possui o "@algo.com" (conferir se é de algum sistema confiável de correio eletrônico)
// - A senha deve ser maior que 8 caracteres, possuir letra maiúscula e um caractere especial (máximo 16 caracteres)
// - Data da criação deve ser tratada antes de enviada (ou não, tenho que descobrir '-')
// - Após o sistema ser feito, partir para o LOGIN.

//EATFLIX
//SISTEMA DE ESTACIONAMENTO, BASEANDO-SE NO TIVOLI/VIC CENTER
//ADICIONAR: UMA TABELA PARA MANTER OS USUARIOS QUE ESTÃO UTILIZANDO O SISTEMA
//ADICIONAR: HORARIOS, LINKS PARA CONFERIR TUDO...
//ADICIONAR: REGISTRAR, LOGIN, ESCOLHER PEDIDO, (ESPERAR PEDIDO COM ALGUM JOGO?), FINALIZAR PEDIDO/CANCELAR
//ADICIONAR: ARTE, E MAIS ARTE
//TESTAR: Uma experiência (COMO USUARIO, COMO LOJA E COMO DEV)

$("#registrarbtn").click(function () {
    window.location.href = "registrar.html";
});

$("#loginbtn").click(function () {
    window.location.href = "login.html";
});