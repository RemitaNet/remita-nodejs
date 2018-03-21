
const sha512 = require('js-sha512').sha512

class StopMandate {
    
    constructor(builder) {
        this.mandateId = builder.mandateId
        this.merchantId = builder.merchantId
        this.requestId = builder.requestId
        this.hash = builder.apikey
    }

    toJSON() {
        return {
            mandateId : this.mandateId,
            merchantId : this.merchantId,
            requestId : this.requestId,
            hash : this.hash
        }
    }


    static get Builder() {
        var privateObj = {}

        class Builder {
           constructor() {}
  
           withMerchantId(merchantId) {
            privateObj.merchantId = merchantId;
              return this;
           }
  
           withMandateId(mandateId) {
            privateObj.mandateId = mandateId;
            return this;
            }
  
            withRequestId(requestId) {
                privateObj.requestId = requestId;
                return this;
            }

            withApiKey(apiKey) {
                privateObj.apiKey = apiKey;
                return this;
            }

           build() {
            privateObj.hash = sha512(`${privateObj.mandateId + privateObj.merchantId + privateObj.requestId + privateObj.apikey}`)
              return new StopMandate(privateObj);
           }
        }
        return Builder;
     }
}

module.exports = { StopMandate }