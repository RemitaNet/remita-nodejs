

class Parameter {

    constructor(){
        this.object = {}
    }

    add(key, value) {
        this.object[key] = value
        return this
    }
}

module.exports = { Parameter }