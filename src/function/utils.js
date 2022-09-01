class Utils {

   listRemoveNull (list = []) {
        return list.filter((item)=> {
            return item !== null
        })
    }
       
    listRemoveNumber (list = [], n) {
        return list.filter((item)=> {
            return item !== n
        })
    }
    
}

module.exports = Utils