const {
  calcularHorasTrabalhadas,
  validarFormatoHora,
} = require("./services/calcHorasService");

describe("Calculadora de Horas Trabalhadas", () => {
  test("Deve calcular corretamente as horas trabalhadas", () => {
    expect(calcularHorasTrabalhadas("08:00", "17:00", "01:00")).toBe("08:00");
    expect(calcularHorasTrabalhadas("09:30", "18:45", "01:00")).toBe("08:15");
  });

  test("Deve calcular corretamente as horas trabalhadas em turnos noturnos", () => {
    expect(calcularHorasTrabalhadas("23:00", "05:00", "01:00")).toBe("05:00");
    expect(calcularHorasTrabalhadas("22:30", "06:30", "00:30")).toBe("07:30");
  });

  test("Deve lançar erro para formato de hora inválido", () => {
    expect(() => validarFormatoHora("8:00")).toThrow(
      "Formato de hora inválido"
    );
    expect(() => validarFormatoHora("25:00")).toThrow(
      "Formato de hora inválido"
    );
    expect(() => validarFormatoHora("08:60")).toThrow(
      "Formato de hora inválido"
    );
  });
});
