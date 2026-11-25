const { par, media, filtrarMaiores18 } = require("./funcoes");

describe("par", () => {
  test("2 é par", () => expect(par(2)).toBe(true));
  test("3 não é par", () => expect(par(3)).toBe(false));
  test("0 é par (boundary)", () => expect(par(0)).toBe(true));
});

describe("media", () => {
  test("média de [7, 8, 9] é 8", () => {
    expect(media([7, 8, 9])).toBe(8);
  });

  test("array vazio lança erro", () => {
    expect(() => media([])).toThrow();
  });
});

describe("filtrarMaiores18", () => {
  const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Beto", age: 17 },
    { name: "Carla", age: 30 },
  ];

  test("Ana e Carla entram, Beto fica de fora", () => {
    const nomes = filtrarMaiores18(usuarios).map((u) => u.name);
    expect(nomes).toEqual(["Ana", "Carla"]);
  });

  test("age === 18 conta como maior", () => {
    const resultado = filtrarMaiores18([{ name: "Dani", age: 18 }]);
    expect(resultado).toHaveLength(1);
  });
});