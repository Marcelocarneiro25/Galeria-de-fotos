$(Document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();

    })
    $('form').on('submit', function(e){
        e.preventDefault( );
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem= $(' <li style="display:none "> </li>')
        $(` <img src="$(enderecoDaNovaImagem) "/>`).appendTo(novoItem );
        $(`<div class="ouverley_imagem_link"> 
            <a href="${enderecoDaNovaImagem}" title="Visualize a imagem em tamanho real"  target="_blank">Visualize a imagem em tamanho real</a>
            </div>`
        ).appendTo(novoItem );
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('endereço-imagem-nova').val('');
    })
    
})