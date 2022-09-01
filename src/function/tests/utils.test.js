const Utils = require('../utils')
let utils = new Utils

describe('Utils Module', ()=> {
    test('remove a null in begin of list', async ()=> {
        let list = [null,'a','b',2,{}, 'f']
        let listFilter = await utils.listRemoveNull(list)
        expect(listFilter).toEqual(['a','b',2,{}, 'f'])
    })    
    
    test('remove a 0 in final of list', async ()=> {
        let list = [0,'a','b',2,{}, 'f']
        let listFilter = await utils.listRemoveZeros(list)
        expect(listFilter).toEqual(['a','b',2,{}, 'f'])
    })


    test('remove a positivo number in begin of list', async ()=> {
        let list = [5,'a','b',2,{}, 'f']
        let listFilter = await utils.listRemoveNumber(list, 5)
        expect(listFilter).toEqual(['a','b',2,{}, 'f'])
    })

    test('remove a negative number in begin of list', async ()=> {
        let list = [-5,'a','b',2,{}, 'f']
        let listFilter = await utils.listRemoveNumber(list, -5)
        expect(listFilter).toEqual(['a','b',2,{}, 'f'])
    })





})