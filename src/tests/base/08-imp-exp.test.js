import { getHeroeById, getHeroesByOwner } from '../../../base/08-imp-exp';
import heroes from '../../data/heroes';




describe('Pruebas en funciones de Heroes', () => {
     
    test('Debe retornar un heroe por id', () => {
         
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    })

    test('Debe retornar undefined si Heroe no existe', () => {
         
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual( undefined );

    })

    //debe retornar un arreglo con los heroes de DC
    // toEqual al arreglo filtrado
    test('Debe retornar un arreglo con los heroes de DC', () => {
         
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroeOwner = heroes.filter( h => h.owner === owner);

        expect( heroes ).toEqual( heroeOwner );

    })

    //debe retornar un arreglo con los heres de marvel
    test('Debe retornar un arreglo con los heroes de Marvel', () => {
         
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

    })


})