class Utils {

   listRemoveNull (list = []) {
        return list.filter((item)=> {
            return item !== null
        })
    }
   
   listRemoveZeros (list = []) {
        return list.filter((item)=> {
            return item !== 0
        })
    }
    
    listRemoveNumber (list = [], n) {
        return list.filter((item)=> {
            return item !== n
        })
    }
    
}

module.exports = Utils