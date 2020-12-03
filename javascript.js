const API_KEY = '3a4509bb16df4a5d9afefff054a57d3b';
var vetor = [];

function exibeNoticias () {
    let query = document.getElementById('txtPesquisa').value;

    let divTelas = document.getElementById('title_men');
    let divTela = document.getElementById('tela');

    let textos = `${query}`;

    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=dados.articles.length-4; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];

        texto = texto + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia.url}">
                            <img src="${noticia.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia.url}">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
    divTelas.innerHTML = textos;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();


}

function exibeSave(){
    $('#title_men2').css('display','flex');
}

function NoexibeSave(){
    $('#title_men2').css('display','none');
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);
document.getElementById ('btnPesquisa').addEventListener ('click', exibeSave);











function exibeNoticiass () {
    let divTelas = document.getElementById('tela');
    let textos = '';

    // Montar texto HTML das noticias
    let dadoss = JSON.parse (this.responseText);
    for (i=dadoss.articles.length-4; i< dadoss.articles.length; i++) {
        let noticias = dadoss.articles[i];
        let datas = new Date (noticias.publishedAt);

        textos = textos + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticias.url}">
                            <img src="${noticias.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticias.url}">
                                <h5 class="card-title">${noticias.title}</h5>
                                <p class="card-text">${noticias.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTelas.innerHTML = textos;
}

function executaPesquisas () {

    let xhrs = new XMLHttpRequest ();
    xhrs.onload = exibeNoticiass;
    xhrs.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhrs.send ();
}

document.getElementById ('btnPesquisas').addEventListener ('click', executaPesquisas);
document.getElementById ('btnPesquisas').addEventListener ('click', NoexibeSave);





function exibeNoticiasss () {
    let divTelass = document.getElementById('tela2');
    let textoss = '<h3 class="p-4 mb-2 bg-white text-dark">Collaborations</h3>';

    // Montar texto HTML das noticias
    let dadosss = JSON.parse (this.responseText);
    for (i=dadosss.sources.length-4; i< dadosss.sources.length; i++) {
        let noticiass = dadosss.sources[i];
        let datass = new Date (noticiass.publishedAt);

        textoss = textoss + `

            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <a href="${noticiass.url}">
                                <h5 class="card-title">${noticiass.name}</h5>
                                <p class="card-text">${noticiass.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTelass.innerHTML = textoss;
}

function executaPesquisass () {

    let xhrss = new XMLHttpRequest ();
    xhrss.onload = exibeNoticiasss;
    xhrss.open ('GET', `https://newsapi.org/v2/sources?language=pt&country=br&apiKey=${API_KEY}`);
    xhrss.send ();
}

document.getElementById ('x').addEventListener ('click', executaPesquisass);








function exibeNoticias4 () {
    let divTela4 = document.getElementById('tela');
    let texto4 = '<h3 class="p-4 mb-2 bg-white text-dark">Blasting News BR</h3>';

    // Montar texto HTML das noticias
    let dados4 = JSON.parse (this.responseText);
    for (i=dados4.articles.length-4; i< dados4.articles.length; i++) {
        let noticia4 = dados4.articles[i];
        let data4 = new Date (noticia4.publishedAt);

        texto4 = texto4 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia4.url}">
                            <img src="${noticia4.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia4.url}">
                                <h5 class="card-title">${noticia4.title}</h5>
                                <p class="card-text">${noticia4.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela4.innerHTML = texto4;
}

function executaPesquisa4 () {

    let xhr4 = new XMLHttpRequest ();
    xhr4.onload = exibeNoticias4;
    xhr4.open ('GET', `https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=${API_KEY}`);
    xhr4.send ();
}

document.getElementById ('a').addEventListener ('click', executaPesquisa4);
document.getElementById ('a').addEventListener ('click', NoexibeSave);




function exibeNoticias5 () {
    let divTela5 = document.getElementById('tela');
    let texto5 = '<h3 class="p-4 mb-2 bg-white text-dark">Globo</h3>';

    // Montar texto HTML das noticias
    let dados5 = JSON.parse (this.responseText);
    for (i=dados5.articles.length-4; i< dados5.articles.length; i++) {
        let noticia5 = dados5.articles[i];
        let data5 = new Date (noticia5.publishedAt);

        texto5 = texto5 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia5.url}">
                            <img src="${noticia5.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia5.url}">
                                <h5 class="card-title">${noticia5.title}</h5>
                                <p class="card-text">${noticia5.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela5.innerHTML = texto5;
}

function executaPesquisa5 () {

    let xhr5 = new XMLHttpRequest ();
    xhr5.onload = exibeNoticias5;
    xhr5.open ('GET', `https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`);
    xhr5.send ();
}

document.getElementById ('b').addEventListener ('click', executaPesquisa5);
document.getElementById ('b').addEventListener ('click', NoexibeSave);





function exibeNoticias6 () {
    let divTela6 = document.getElementById('tela');
    let texto6 = '<h3 class="p-4 mb-2 bg-white text-dark">Google News BR</h3>';

    // Montar texto HTML das noticias
    let dados6 = JSON.parse (this.responseText);
    for (i=dados6.articles.length-4; i< dados6.articles.length; i++) {
        let noticia6 = dados6.articles[i];
        let data6 = new Date (noticia6.publishedAt);

        texto6 = texto6 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia6.url}">
                            <img src="${noticia6.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia6.url}">
                                <h5 class="card-title">${noticia6.title}</h5>
                                <p class="card-text">${noticia6.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela6.innerHTML = texto6;
}

function executaPesquisa6 () {

    let xhr6 = new XMLHttpRequest ();
    xhr6.onload = exibeNoticias6;
    xhr6.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
    xhr6.send ();
}

document.getElementById ('c').addEventListener ('click', executaPesquisa6);
document.getElementById ('c').addEventListener ('click', NoexibeSave);


function exibeNoticias7 () {
    let divTela7 = document.getElementById('tela');
    let texto7 = '<h3 class="p-4 mb-2 bg-white text-dark">Info Money</h3>';

    // Montar texto HTML das noticias
    let dados7 = JSON.parse (this.responseText);
    for (i=dados7.articles.length-4; i< dados7.articles.length; i++) {
        let noticia7 = dados7.articles[i];
        let data7 = new Date (noticia7.publishedAt);

        texto7 = texto7 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia7.url}">
                            <img src="${noticia7.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia7.url}">
                                <h5 class="card-title">${noticia7.title}</h5>
                                <p class="card-text">${noticia7.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela7.innerHTML = texto7;
}

function executaPesquisa7 () {

    let xhr7 = new XMLHttpRequest ();
    xhr7.onload = exibeNoticias7;
    xhr7.open ('GET', `https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`);
    xhr7.send ();
}

document.getElementById ('d').addEventListener ('click', executaPesquisa7);
document.getElementById ('d').addEventListener ('click', NoexibeSave);



function executaPesquisa14 () {

    let xhr14 = new XMLHttpRequest ();
    xhr14.onload = exibeNoticiass;
    xhr14.open ('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    xhr14.send ();
}

document.getElementById ('k').addEventListener ('click', executaPesquisa14);
document.getElementById ('k').addEventListener ('click', NoexibeSave);

function executaPesquisa15 () {

    let xhr15 = new XMLHttpRequest ();
    xhr15.onload = exibeNoticiass;
    xhr15.open ('GET', `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${API_KEY}`);
    xhr15.send ();
}

document.getElementById ('l').addEventListener ('click', executaPesquisa15);
document.getElementById ('l').addEventListener ('click', NoexibeSave);


function executaPesquisa17 () {

    let xhr16 = new XMLHttpRequest ();
    xhr16.onload = exibeNoticiass;
    xhr16.open ('GET', `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`);
    xhr16.send ();
}

document.getElementById ('n').addEventListener ('click', executaPesquisa17);
document.getElementById ('n').addEventListener ('click', NoexibeSave);


function exibeTitle(query){
    let divTelas = document.getElementById('title_men');
    let textos = `${query}`;
    divTelas.innerHTML = textos;
    exibeSave();
}

function exibeNoticia19(name) {

    let divTela = document.getElementById('tela');

    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=dados.articles.length-4; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];

        texto = texto + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia.url}">
                            <img src="${noticia.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia.url}">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}


function executaPesquisa18 (query) {
    
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticia19;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}



function exibeNoticias18 () {
    let divTela8 = document.getElementById('save_search');
    let texto8 = '';
    dados = JSON.parse(localStorage.getItem('query'));
    for(i=0;i<dados.length;i++){
        query = dados[i]
        texto8 = texto8 + `
            <li><button onclick="executaPesquisa18('${query}'), exibeTitle('${query}');">${query}</button></li>    
        `;
    }
    divTela8.innerHTML = texto8;    
}


window.onload = () => {
    dados = JSON.parse(localStorage.getItem('query'));
    if(dados != null){
        for(i=0;i<dados.length;i++){
            vetor.push(dados[i]);
        }
        exibeNoticias18();
    }
    executaPesquisas();
    save.onclick =() => {
        let parametro =  document.getElementById('title_men').innerHTML;
        vetor.push(parametro);
        localStorage.setItem('query', JSON.stringify( vetor ) );
        exibeNoticias18(); 
    }
    if(dados != null){
        exibeNoticias18();
    }
}


