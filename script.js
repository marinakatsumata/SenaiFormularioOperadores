// Este é um exemplo de como manipular elementos do HTML com JavaScript.

/* Selecionamos o botão com id 'btnMensagem' e adicionamos um ouvinte de evento de clique.*/
document.getElementById("btnMensagem").addEventListener("click", function () {
  // Quando o botão for clicado, alteramos o conteúdo do parágrafo com id 'mensagem'.
  document.getElementById("mensagem").textContent = "Olá! Você clicou no botão.";
});


/*
A função somar() serve para:

- Pegar os valores digitados pelo usuário em dois campos de input.
- Verificar se os valores são válidos (números).
- Somar os dois valores, se forem válidos.
- Exibir o resultado na tela.
*/

function somar() {
  /*
- document.getElementById("valor1"): acessa o input com ID valor1.
- .value: pega o que o usuário digitou (vem como texto, mesmo que o usuário digite um número).
- parseFloat(...): converte o texto em número com casas decimais (float).
- let v1: cria uma variável chamada v1 para armazenar esse número.
  */

  // Pegamos os valores dos inputs como texto e convertemos para número
  let v1 = parseFloat(document.getElementById("valor1").value);
  let v2 = parseFloat(document.getElementById("valor2").value);

  /*
  Aqui fazemos uma verificação:

  - isNaN(v1): verifica se v1 não é um número (NaN = Not a Number).
  - ||: operador "OU". A condição será verdadeira se pelo menos um dos dois valores for inválido.
  - Se for verdadeiro, significa que o usuário digitou algo errado (como texto ou campo vazio).
  
  */

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById("resultado").textContent = "Por favor, digite dois números válidos.";
  } else {
    let resultado = v1 + v2; // Faz a soma
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }

}
