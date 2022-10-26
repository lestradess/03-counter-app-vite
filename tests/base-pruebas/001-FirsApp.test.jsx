/** @jest-environment jsdom */

import { render } from "@testing-library/react"
import { FirsApp } from "../../src/FirsApp"

describe('Pruebas en FirsApp', () => {

    test("debe quedar con las propiedades por defecto", () => {
        const title = "Hola soy Goku";
        const { container } = render(<FirsApp title={ title } />);
        
        //Con esta funcion hace una instantanea de cómo esta la página
        expect(container).toMatchSnapshot();

    })
    test ("debe mostrar el título en un h1", () => {
        const title = "Hola soy Goku";
        const { container,getByText } = render(<FirsApp title={ title } />);

        expect(getByText(title)).toBeTruthy();        
    })
})