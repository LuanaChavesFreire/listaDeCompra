import { criarItemDaLista } from "./scripts/criarItemDaLista.js"
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const botaoAdicionarItem = document.getElementById('adicionarItem')
const listaDeCompras = document.getElementById("listaDeCompras");

botaoAdicionarItem.addEventListener('click', () => {
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista);
  
  verificarListaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras);

