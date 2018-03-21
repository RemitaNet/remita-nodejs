const { Connection } = require('./Connection');
const { Constants } = require('./Constants')


class BaseService {

    constructor() {
        const constants = new Constants()
        this.webMethod = constants.webMethod
        this.endPoints = constants.endPoints
        this.connection = new Connection()
        this.header = {}
    }

    send(method, data, endPoint) {
    
        return new Promise((resolve, reject)=>{
            this.connection.connect(method, data , endPoint, (err, httpResponse, body) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(body)
                }
            });
       });
    }
}


class Service extends BaseService {
    
    constructor(){
        super()
    }

    splitPaymentService(data) {
       return this.send(this.webMethod.post, data, this.endPoints.SplitPayment)
    }

    mandateSetupService(data) {
        return this.send(this.webMethod.post, data, this.endPoints.MandateSetup)
    }
    
    stopMandateService(data) {
        return this.send(this.webMethod.post, data, this.endPoints.StopMandate)
    }

    mandateActivateRequestOTPService(data) {
        this.connection.updateHeader(this.header)
        return this.send(this.webMethod.post, data, this.endPoints.MandateActivateOTPRequest)
    }

    activateMandateService(data) {
        this.connection.updateHeader(this.header)
        return this.send(this.webMethod.post, data, this.endPoints.ActivateMandate)
    }
}

module.exports = { Service }



