const mensagemListavazia = document.querySelector(".mensagemListaVazia");

function verificarListaVazia(listaDeCompras) {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListavazia.style.display = "block";
  } else {
    mensagemListavazia.style.display = "none";
  }
}

export default verificarListaVazia;