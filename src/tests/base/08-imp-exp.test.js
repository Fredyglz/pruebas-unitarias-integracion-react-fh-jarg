import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp.js';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('debe de retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => heroe.id === id );

        expect(heroe).toEqual(heroeData);
    })

    test('debe de retornar un undefined si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    // Tarea 

    // Ejercicio 1
    // debe de retornar un arreglo con los héroes de DC
    // owner
    // toEqual a arrelgo filtrado
    test('debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner)
        // console.log(heroesDC);
        expect(heroesDC).toEqual(heroesData);
    })
    
    // Ejercicio 2
    // debe de retornar un arreglo con los héroes de Marvel
    // length = 2 // toBe
    test('debe de retornar un arreglo con los héroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner)
        // console.log(heroesMarvel.length);
        expect(heroesMarvel.length).toBe(2);
    })
})
