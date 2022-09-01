class Utils {

   listRemoveNull (list = []) {
        return list.filter((item)=> {
            return item !== null
        })
    }
    
}

module.exports = Utils