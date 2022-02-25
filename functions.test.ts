const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    test("should have length of 10 ", ()=>{
        let arr = shuffleArray(bots)
        expect(arr).toHaveLength(10)
    })
    test("should be shuffled", ()=>{
        let arr = shuffleArray(bots)
        expect(arr).not.toEqual(bots)
    })

    test("should return an array", ()=>{
        let arr = shuffleArray(bots)
        expect(arr).toEqual(expect.arrayContaining(bots))
    })
})