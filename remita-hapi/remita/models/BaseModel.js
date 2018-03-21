
class Payer {

    constructor() {
        this.merchantId = ""
        this.serviceTypeId = ""
        this.payerName = ""
        this.payerEmail = ""
        this.payerPhone = ""
    }
 }

 class Merchant {

    constructor() {
        this.merchantId = ""
        this.serviceTypeId = ""
    }

 }


 module.exports = { Payer, Merchant }
