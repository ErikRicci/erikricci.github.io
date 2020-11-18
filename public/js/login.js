let refazersenha = (email, nova_senha) => {

    var db = new restdb("5f434e3a3abd4e679e244ba6");
    var query = { "email_cliente": email };
    var hint = {};
    var idConta;

    db.clientes.find(query, hint, function (err, res) {
        if (!err) {
            console.log(res);
            if (res.length < 1)
                alert('Email ou senha incorretos. Tente Novamente.');
            else {
                idConta = res[0]._id;
                alert('Sua senha está sendo alterada. Aguarde alguns instantes para ser redirecionado à tela de login.');
                put(idConta, email, nova_senha);
            }
        }
    });
}

let put = (id, email, nova_senha) => {
    console.log(id + ' ' + email + ' ' + nova_senha);
    var jsondata = { "email_cliente": email, "senha_cliente": nova_senha };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://eatflix-085c.restdb.io/rest/clientes/" + id,
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5f434e3a3abd4e679e244ba6",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}