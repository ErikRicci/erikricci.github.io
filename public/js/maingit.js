//A loja que foi aberta.
var idLoja = "";
//O menu da loja, dividido em um array.
var menu = [];
//As imagens do menu da loja, divididas em um array.
var menu_images = [];

function createData() {
    var mydata = { "access_token": "ac3507d0f1e461aa60124db3022325c6d127f337" };
    return (mydata);
}

function getMenu(params) {
    params = params || {};
    params.url = 'https://api.github.com/repos/ErikRicci/menus/contents/docevida.json';
    params.type = 'GET';

    params.complete = function (requiem) {
        if (requiem.status == 0) {
            console.log('nada a comentar');
        } else if (requiem.status >= 200 && requiem.status < 300) {
            console.log('sucesso');
        } else if (requiem.status >= 400) {
            console.log('erro');
        } else {
            console.log('hmmm, aviso');
        }
        //Console.log do conteúdo (em base64) do arquivo
        var source = requiem.responseText;
        source = JSON.parse(source);        
        idLoja = source.name;
        idLoja = idLoja.slice(0, -5);
        source = source.content;
        source = window.atob(source);
        source = JSON.parse(source);
        menu = source.items;
        
        console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
        console.log(menu.length);
        getImageItem({data:createData()});
    }

    //Se nada foi enviado (?) não entendo muito bem ainda sobre AJAX (ainda!)
    if (jQuery.isEmptyObject(params.data)) {
        console.log('e');
    }
    var req = $.ajax(params).always(function () {
    });
}

function getImageItem(params) {
    params = params || {};
    params.url = 'https://api.github.com/repos/ErikRicci/Mega/contents/item-images/' + idLoja;
    params.type = 'GET';

    params.complete = function (requiem) {
        if (requiem.status == 0) {
            console.log('nada a comentar');
        } else if (requiem.status >= 200 && requiem.status < 300) {
            console.log('sucesso');
        } else if (requiem.status >= 400) {
            console.log('erro');
        } else {
            console.log('hmmm, aviso');
        }
        //Console.log do conteúdo (em base64) do arquivo
        var source = requiem.responseText;
        source = JSON.parse(source);
        
        console.log(source);
        for(var i = 0; i < source.length; i ++)
        {
            menu_images.push(source[i].download_url);
        }        
        console.log(menu_images);
        loadItems();
    }

    //Se nada foi enviado (?) não entendo muito bem ainda sobre AJAX (ainda!)
    if (jQuery.isEmptyObject(params.data)) {
        console.log('e');
    }
    var req = $.ajax(params).always(function () {
    });
}

let loadItems = () => {
    for (var i = 0; i < menu.length; i++) {
        var $cellElems = $(makeCell(i, menu_images[i]));
        $gallery.flickity('append', $cellElems);
    }
}

//CARROSSEL

//Pega a galeria
var $gallery = $('.gallery').flickity({
});

//Cria uma célula para alocar a imagem da loja
function makeCell(i, image) {
    return `<div class="gallery-cell" id="item-${i}">
    <img style="filter: blur(2px); -webkit-filter: blur(2px); border: 3px solid #f1f1f1"
    src="${image}"><label style="position: absolute; font-weight: bold">
    ${menu[i].name}</label></img></div>`;
}