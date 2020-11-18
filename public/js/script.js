let login = (email, senha) => {
    //Realiza uma nova conexão com o banco. O parâmetro passado é a chave da API
    var db = new restdb("5f434e3a3abd4e679e244ba6");
    //Query são os valores que estamos atrás. Usa-se uma combinação do EMAIL e da SENHA
    //providos pelo usuário
    var query = { "email_cliente": email, "senha_cliente": senha };
    var hint = {};
    db.clientes.find(query, hint, function (err, res) {
        if (!err)
        {
            
            // res retorna 0 se não houver aquela combinação
            if (res.length < 1)
                alert('Email ou senha incorretos. Tente Novamente.');
            else
            {
                alert('Bem vindo, ' + res[0].nome_cliente + '! Você será redirecionado em alguns instantes...');
                window.location.href = "/public/html/main.html";
            }
        }
    });
}

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
    window.location.href = "/public/html/registrar.html";
});