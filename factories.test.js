import {ship, position, board} from './factories'

test ('Create boat with factory', () => {
    expect(ship(5).length).toBe(5)
    expect(ship(2).hits).toBe(0)
    expect(ship(4).hit()).toBe(1)
    expect(ship(3).isSunk()).toBe(false)
    expect(ship(8).start).toBe('A1')
    expect(ship(4).location).toStrictEqual(['A1', 'B1', 'C1', 'D1'])
})

test('Ship position vertical and horizontal', () => {
    expect(position('A1', 4, 'vertical')).toStrictEqual(['A1', 'A2', 'A3', 'A4'])
    expect(position('B2')).toStrictEqual(['B2', 'C2', 'D2'])
})

test ('Board cells creation', () => {
    expect(board().length).toBe(100)
})