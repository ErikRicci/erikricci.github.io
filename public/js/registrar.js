let clientes = [];

$(".registrar").click(function () {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var data = new Date();
    var dd = String(data.getDate()).padStart(2, '0');
    var mm = String(data.getMonth() + 1).padStart(2, '0');
    var yyyy = data.getFullYear();

    data = dd + '-' + mm + '-' + yyyy;

    let novoCliente = new Cliente(name, email, senha, data);
    clientes.push(novoCliente);

    data = dd + '-' + mm + '-' + yyyy;

    registrar(novoCliente);

    console.log('%c Dados do Usuário', 'color: orange; font-weight: bold;',);
    console.table(clientes);
});

let registrar = ({ name, email, senha, dataCriacao }) => {

    var jsondata = { "nome_cliente": name, "email_cliente": email, "senha_cliente": senha, "data_criacao": dataCriacao };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://eatflix-085c.restdb.io/rest/clientes",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5f434e3a3abd4e679e244ba6",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "error": function (xhr) {
            var error;
            error = JSON.parse(xhr.responseText);

            if(error.status == 400)
                alert('Este e-mail já existe. Crie uma conta utilizando outro, ou faça o login.');
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert("Usuario criado com sucesso!");
    });
}