const ship = (n) => {
    let length = n
    let position = []
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
    return {length, position, hits, hit, isSunk}
}

function board (){
    let x = ['a','b','c','d','e','f','g','h','j','i']
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
    
}

export {ship, board}