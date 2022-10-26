import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07_deses-arr', () => {
    test('Debe retornar un string y un número', () => {

        const [ letras, numeros ] = retornaArreglo();
        console.log(letras,numeros);

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe("number");

        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number))



    })
})