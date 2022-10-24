describe('Pruebas en Tal Componente', () => {
    test("Esta prueba no deve dar error", () => {
        // 1- inicialización
        const message1 = "Hola mundo  ";
        // 2- estímulo
        const message2 = message1.trim();
        // 3 Observar el comportamiento esperado
        expect(message1).toBe(message2);

    })
})

