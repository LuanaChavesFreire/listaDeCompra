import gerarDataHora from "./gerarDataHora.js";

let contador = 0;

export function criarItemDaLista() {
  const dia = gerarDataHora().diaSemana;
  const datas = gerarDataHora().datas;
  const hora = gerarDataHora().horas;
  const inputItem = document.getElementById("inputItem").value;

  if (!inputItem.trim()) {
    alert("Por favor preencha o campo devidamente!");
    return;
  }

  const itemDaLista = document.createElement("li");
  itemDaLista.classList.add("listaItemContainer");

  const divItemContainer = document.createElement("div");
  divItemContainer.classList.add("divItemContainer");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${contador++}`;
  checkbox.classList.add("checkbox");

  const nomeItem = document.createElement("p");
  nomeItem.textContent = inputItem;

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  const textData = document.createElement("p");
  textData.classList.add("textoData");
  textData.textContent = `${dia} (${datas})  às ${hora}`;

  divItemContainer.appendChild(checkbox);
  divItemContainer.appendChild(nomeItem);

  itemDaLista.appendChild(divItemContainer);
  itemDaLista.appendChild(textData);

  return itemDaLista;
}
