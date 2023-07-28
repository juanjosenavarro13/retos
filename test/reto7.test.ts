import { getGiftsToRefill } from '../src/reto7'

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']



describe('test function', () => {
  test('case 1', () => {
    expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(['muñeca', 'pc'])
  })
})