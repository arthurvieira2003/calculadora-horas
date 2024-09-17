const { calcularHorasTrabalhadas } = require("../services/calcHorasService");

const calcHorasController = {
  calcularHorasTrabalhadas: (req, res) => {
    const { inicio, fim, intervalo } = req.query;
    try {
      const horasTrabalhadas = calcularHorasTrabalhadas(inicio, fim, intervalo);
      res.send(`Horas trabalhadas: ${horasTrabalhadas}`);
    } catch (error) {
      res.status(400).send(`Erro: ${error.message}`);
    }
  },
};

module.exports = calcHorasController;
