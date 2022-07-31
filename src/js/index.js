/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos 
que mostrar o próximo cartão da lista

- passo 1 = dar um jeito de pegar o elemento HTML da seta avançar

- passo 2 = dar um jeito de identificar o clique do usuário na seta avançar

- passo 3 = fazer aparecer o próximo cartão da lista

- passo 4 = buscar o cartão que está selecionado e esconder

*/

const btnAvancar = document.getElementById('btn-avancar');
const cartao = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartao[indiceCartao].classList.add('selecionado');
}



btnAvancar.addEventListener('click', function () {
        if(cartaoAtual === cartao.length - 1) return;
        cartaoAtual ++;
        mostrarCartao(cartaoAtual);

        esconderCartaoSelecionado();
    });


/* OBJETIVO 2 - quando clicarmos na seta de voltar temos 
    que mostrar o cartão anterior da lista
    
    - passo 1 = dar um jeito de pegar o elemento HTML da seta voltar
    
    - passo 2 = dar um jeito de identificar o clique do usuário na seta voltar
    
    - passo 3 = fazer aparecer o cartão anterior da lista
    
    - passo 4 = buscar o cartão que está selecionado e mostrar */

const btnVoltar = document.getElementById('btn-voltar');


btnVoltar.addEventListener('click', function () {

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual --;
    mostrarCartao(cartaoAtual); 
});