const ship = (length, start = 'A1') => {
    length = length
    start = start
    let location = position(start, length, /* placeholder for direction */ )
    let hits = 0
    function hit () {
        hits ++
        return hits
    }
    function isSunk () {
        if(hit == length){
            return true
        }
        return false
    }
    return {length, location, hits, start, hit, isSunk}
}

function position(start, length = 3, dir = 'horizontal' ) {
    let coordinates = []
    dir = dir[0].toLowerCase()

    // Vertical position

    if(dir == 'v'){
        while (coordinates.length < length){
            coordinates.push(start)
            let number = Number(start[1])+1
            start = start[0] + number 
        }
    }
    if (dir == 'h'){
        while (coordinates.length < length){
            coordinates.push(start)
            let letter = start.charCodeAt(0)+1
            start = String.fromCharCode(letter) + start[1]
        }
    }
    return coordinates
}

function board (){
    // Horizontal Axis
    let x = ['a','b','c','d','e','f','g','h','j','i']
    // Vertical Axis
    let y = [1,2,3,4,5,6,7,8,9,10]
    let total = []
    for( let coor of x){
        //makes letters Uppercase (coor X)
        coor = coor.toUpperCase()
        for( let num of y){
            total.push(coor + num)
        }
    }
    return total
}

const Gameboard = () => {
    function placeShip(start, direction){

    }
}

export {ship, position, board}