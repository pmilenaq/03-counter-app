import { retornaArreglo } from '../../../base/07-deses-arr';


describe('Pruebas en desestructuración', () => {

    test('debe retornar un String y un numero', () => {
         
        const [ letras, numero] = retornaArreglo();
        
        //expect( arr ).toEqual( ['ABC', 123] );

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numero ).toBe( 123 );
        expect( typeof numero ).toBe( 'number' );

        })
})