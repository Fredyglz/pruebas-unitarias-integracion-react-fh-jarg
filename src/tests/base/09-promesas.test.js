import {getHeroeByIdAsync} from '../../base/09-promesas.js';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', () => {
        const id = 1;
        return getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
            });
    });

    test('debe de obtener un error si el héroe por id no existe', () => {
        const id = 10;
        return getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
            })
    });
})
