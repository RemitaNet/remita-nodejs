

class MandateRequestOtp {

    constructor(mandateId, requestId) {
        this.mandateId = mandateId
        this.requestId = requestId
    }

    toJSON() {
        return {
            mandateId : this.mandateId,
            requestId : this.requestId
        }
    }
}

module.exports = { MandateRequestOtp }