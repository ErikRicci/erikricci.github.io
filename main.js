let arrayStores = [];

let getStores = () => {
    var db = new restdb("5f434e3a3abd4e679e244ba6");
    var query = {};
    var hint = {};
    db.lojas.find(query, hint, function (err, res) {
        if (!err) {
            arrayStores = res;
            console.table(arrayStores);
            loadStores();
        }
    });
}

let loadStores = () => {
    for(var i = 0; i < arrayStores.length; i++)
    {
        var $cellElems = $(makeCell(i));
        $gallery.flickity('append', $cellElems);
    }
}

//Pega a galeria
var $gallery = $('.gallery').flickity({
});

//Cria uma célula para alocar a imagem da loja
function makeCell(i) {
    return `<div class="gallery-cell"><img title="${arrayStores[i].nome_loja}" src="https://eatflix-085c.restdb.io/media/${arrayStores[i].logo_loja[0]}"/></div>`;
}