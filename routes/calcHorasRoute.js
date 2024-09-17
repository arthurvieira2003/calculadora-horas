const calcHorasController = require("../controllers/calcHorasController");

const calcHorasRoute = (app) => {
  app.get("/calcular-horas", calcHorasController.calcularHorasTrabalhadas);
};

module.exports = calcHorasRoute;
