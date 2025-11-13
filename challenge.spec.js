import { maximaGanancia } from "./challenge";

const huertoMaldito = [2, -5, 8, -2, 4, -10, 3, 1];
const ej1 = [1, 2, 3, 4];
const ej2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const ej3 = [-1, -2, -3, -4];
const ej4 = [8, 1, -100, 2, 5];
const ej5 = [8, -2, 3, 4, 2, -9, 8];

describe("maximaGanancia", () => {
  it("should return the maximum gain", () => {
    expect(maximaGanancia([])).toBe(0);
    expect(maximaGanancia([1])).toBe(1);
    expect(maximaGanancia([1, 2])).toBe(3);
    expect(maximaGanancia([1, 2, 3])).toBe(6);
    expect(maximaGanancia([1, -2, 3])).toBe(3);
    expect(maximaGanancia([3, 2, 3, -1])).toBe(8);

    expect(maximaGanancia(huertoMaldito)).toBe(10);
    expect(maximaGanancia(ej1)).toBe(10);
    expect(maximaGanancia(ej2)).toBe(6);
    expect(maximaGanancia(ej3)).toBe(-1);
    expect(maximaGanancia(ej4)).toBe(9);
    expect(maximaGanancia(ej5)).toBe(15);
  });
});
