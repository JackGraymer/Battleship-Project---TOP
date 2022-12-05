import ship from './factories'

test ('Create boat with factory', () => {
    expect(ship(5).length).toBe(5)
    expect(ship(2).hit).toBe(0)
    expect(ship(3).sunk()).toBe(false)
})