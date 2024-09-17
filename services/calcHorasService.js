function padronizarFormatoHora(hora) {
  if (hora.length === 4) {
    return `${hora.slice(0, 2)}:${hora.slice(2)}`;
  }
  return hora;
}

function validarFormatoHora(hora) {
  const horaPadronizada = padronizarFormatoHora(hora);
  if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(horaPadronizada)) {
    throw new Error("Formato de hora inválido");
  }
  return horaPadronizada;
}

function calcularHorasTrabalhadas(inicio, fim, intervalo) {
  if (!inicio || !fim || !intervalo) {
    throw new Error("Todos os campos são obrigatórios");
  }

  inicio = padronizarFormatoHora(inicio);
  fim = padronizarFormatoHora(fim);
  intervalo = padronizarFormatoHora(intervalo);

  const [horaInicio, minInicio] = inicio.split(":").map(Number);
  const [horaFim, minFim] = fim.split(":").map(Number);
  const [horaIntervalo, minIntervalo] = intervalo.split(":").map(Number);

  let diferencaMinutos = horaFim * 60 + minFim - (horaInicio * 60 + minInicio);

  if (diferencaMinutos < 0) {
    diferencaMinutos += 24 * 60;
  }

  diferencaMinutos -= horaIntervalo * 60 + minIntervalo;

  const horasTrabalhadas = Math.floor(diferencaMinutos / 60);
  const minutosTrabalhados = diferencaMinutos % 60;

  return `${String(horasTrabalhadas).padStart(2, "0")}:${String(
    minutosTrabalhados
  ).padStart(2, "0")}`;
}

module.exports = {
  calcularHorasTrabalhadas,
  validarFormatoHora,
  padronizarFormatoHora,
};
