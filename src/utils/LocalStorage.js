export default {
    getLocalStorage(key){
        return JSON.parse(localStorage.getItem(key))
    },
    setLocalStorage(key,value) {
        localStorage.setItem(key,JSON.stringify(value))
    },
    removeLocalStorage(key) {
        localStorage.removeItem(key)
    }
}