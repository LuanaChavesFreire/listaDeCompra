const data = new Date();

function gerarDataHora() {
  const diaSemana = data.toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  const datas = data.toLocaleDateString("pt-BR");

  const horas = data.toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
    return { diaSemana, datas, horas };
}

export default gerarDataHora;