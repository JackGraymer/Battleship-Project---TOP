import {ship, board} from './factories'

test ('Create boat with factory', () => {
    expect(ship(5).length).toBe(5)
    expect(ship(2).hits).toBe(0)
    expect(ship(4).hit()).toBe(1)
    expect(ship(3).isSunk()).toBe(false)
})

test ('Board cells creation', () => {
    expect(board().length).toBe(100)
})