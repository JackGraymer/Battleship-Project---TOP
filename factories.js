const ship = (n) => {
    let length = n
    let position = []
    let hit = 0
    function sunk () {
        if(hit == length){
            return true
        }
        return false
    }
    return {length, position, hit, sunk}
}

export default ship