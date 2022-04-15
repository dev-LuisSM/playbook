import Pokemon from "./pokemon.js";

test("1) Create a new object pokemon", () => {
  const myPokemon = new Pokemon("Pikachu");
  // expect(myPokemon.name).toBe('Pikachuuuuuuuu'); // Corregir
  expect(myPokemon.name).toBe("Pikachu");
});
