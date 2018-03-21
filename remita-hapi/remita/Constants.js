
class Constants {

    constructor() {
        this.webMethod = {
            get : "GET",
            post : "POST",
            delete : "DELETE",
            update : "UPDATE",
            put : "PUT",
        }
    
        this.endPoints = {
            SplitPayment : "http://192.9.200.209:8780/remita/ecomm/split/init.reg",
            MandateSetup : "http://192.9.200.209:6200/microservice/remita/gateway/send/api/echannelsvc/echannel/mandate/setup",
            StopMandate : "http://www.remitademo.net/remita/exapp/api/v1/send/api/echannelsvc/echannel/mandate/stop",
            MandateActivateOTPRequest : "http://192.9.200.209:6200/microservice/remita/gateway/send/api/echannelsvc/echannel/mandate/requestAuthorization",
            ActivateMandate : "http://192.9.200.209:6200/microservice/remita/gateway/send/api/echannelsvc/echannel/mandate/validateAuthorization"
        };
    } 
}

module.exports = { Constants }