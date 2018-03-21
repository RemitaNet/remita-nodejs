

class ActivateMandate {

    constructor(remitaTransRef, authParams) {
        this.remitaTransRef = remitaTransRef
        this.authParams = authParams
    }


    toJSON() {
        return {
            remitaTransRef : this.remitaTransRef,
            authParams : this.authParams
        }
    }
}

module.exports = { ActivateMandate }