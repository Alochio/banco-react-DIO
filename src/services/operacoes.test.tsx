import { multiplica, soma } from "./operacoes";

describe ('soma', () => {
    it('Deve somar um ao numero infomado.', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('Deve multiplicar o número por 2', () => {
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })

    it('Deve multiplicar o número por 3', () => {
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })
})