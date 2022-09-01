const Utils = require('../utils')
let utils = new Utils

describe('Utils Module', ()=> {
    test('remove a null in begin of list', async ()=> {
        let list = [null,'a','b',2,{}, 'f']
        let listFilter = await utils.listRemoveNull(list)
        expect(listFilter).toEqual(['a','b',2,{}, 'f'])
    })
})