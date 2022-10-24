import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar "hola Fernando"', () => {
        const name = " Fernando";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })
})