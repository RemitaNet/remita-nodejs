
  const sha512 = require('js-sha512').sha512

  class SplitPayment {

     constructor(build) {

        if (arguments.length === 1) {

            this.merchantId = build.merchantId
            this.serviceTypeId = build.serviceTypeId
            this.totalAmount = build.totalAmount
            this.hash = build.hash
            this.payerName = build.payerName
            this.payerEmail = build.payerEmail
            this.payerPhone = build.payerPhone
            this.orderId = build.orderId
            this.responseurl = build.responseurl
            this.lineItems = build.lineItems
        }
     }

     lineItemsJSON(item) {
         return item.toJSON()
     }

     toJSON() {
         return {
            merchantId : this.merchantId,
            serviceTypeId : this.serviceTypeId,
            totalAmount : this.totalAmount,
            hash : this.hash,
            payerName : this.payerName,
            payerEmail : this.payerEmail,
            payerPhone : this.payerPhone,
            orderId : this.orderId,
            responseurl : this.responseurl,
            lineItems : this.lineItems.map(this.lineItemsJSON)

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
  
           withServiceTypeId(serviceTypeId) {
            privateObj.serviceTypeId = serviceTypeId;
            return this;
            }
  
            withTotalAmount(totalAmount) {
                privateObj.totalAmount = totalAmount;
                return this;
            }
  
            withPayerName(payerName) {
                privateObj.payerName = payerName;
                return this;
            }
  
            withPayerEmail(payerEmail) {
                privateObj.payerEmail = payerEmail;
                return this;
            }

            withPayerPhone(payerPhone) {
                privateObj.payerPhone = payerPhone;
                return this;
            }

            withOrderId(orderId) {
                privateObj.orderId = orderId;
                return this;
            }

            withResponseurl(responseurl) {
                privateObj.responseurl = responseurl;
                return this;
            }

            withLineItems(lineItems) {
                privateObj.lineItems = lineItems;
                return this;
            }

            withApiKey(apiKey) {
                privateObj.apiKey = apiKey;
                return this;
            }

           build() {
            privateObj.hash = sha512(`${ this.merchantId + this.serviceTypeId + this.orderId + this.totalAmount + this.responseurl + this.apiKey}`)
              return new SplitPayment(privateObj);
           }
        }
        return Builder;
     }
  }


  module.exports = { SplitPayment }
