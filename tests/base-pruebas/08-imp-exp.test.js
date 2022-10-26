import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroesOri from "../../src/data/heroes.js";
describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })
    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(100);
        expect(hero).toBeFalsy;

    })
    test('getHeroesByOwner ha de retornar 3 heroes de DC', () => {
        const heroesArr = [ 'Batman', 'Superman', 'Flash' ];
        const heroes = getHeroesByOwner('DC');
        const heroesArrOri = [];
        heroes.forEach(heroe => {
            heroesArrOri.push(heroe.name);
        });

        //console.log('heroesArrOri: ' + heroesArrOri);
        //console.log('heroesArr: ' + heroesArr);
        expect(heroesArrOri).toEqual(heroesArr);
        expect(heroesArrOri.length).toEqual(heroesArr.length)
        expect(heroes).toEqual(heroesOri.filter((heroe) => heroe.owner === 'DC'));
    })
})