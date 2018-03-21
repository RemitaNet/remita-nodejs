const sha512 = require('js-sha512').sha512

  class MandateSetup {

     constructor(build) {

        if (arguments.length === 1) {

            this.merchantId = build.merchantId
            this.serviceTypeId = build.serviceTypeId
            this.requestId = build.requestId
            this.hash = build.hash
            this.payerName = build.payerName
            this.payerEmail = build.payerEmail
            this.payerPhone = build.payerPhone
            this.payerBankCode = build.payerBankCode
            this.payerAccount = build.payerAccount
            this.startDate = build.startDate
            this.endDate = build.endDate
            this.amount = build.amount
            this.mandatetype = build.mandatetype
            this.maxNoOfDebits = build.maxNoOfDebits
            this.frequency = build.frequency
        }
     }

     toJSON() {
         return {
            merchantId : this.merchantId,
            serviceTypeId : this.serviceTypeId,
            requestId : this.requestId,
            hash : this.hash,
            payerName : this.payerName,
            payerEmail : this.payerEmail,
            payerPhone : this.payerPhone,
            payerBankCode : this.payerBankCode,
            payerAccount : this.payerAccount,
            startDate : this.startDate,
            endDate : this.endDate,
            amount : this.amount,
            mandateType : this.mandatetype,
            maxNoOfDebits : this.maxNoOfDebits,
            frequency : this.frequency
         }
     }


     static get Builder() {
        class Builder {
           constructor() {}
  
           withMerchantId(merchantId) {
              this.merchantId = merchantId;
              return this;
           }
  
           withServiceTypeId(serviceTypeId) {
            this.serviceTypeId = serviceTypeId;
            return this;
            }
  
            withPayerName(payerName) {
                this.payerName = payerName;
                return this;
            }
  
            withPayerEmail(payerEmail) {
                this.payerEmail = payerEmail;
                return this;
            }

            withPayerPhone(payerPhone) {
                this.payerPhone = payerPhone;
                return this;
            }

            withApiKey(apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            withRequestId(requestId) {
                this.requestId = requestId;
                return this;
            }

            withPayerBankCode(payerBankCode) {
                this.payerBankCode = payerBankCode;
                return this;
            }

            withPayerAccount(payerAccount) {
                this.payerAccount = payerAccount;
                return this;
            }

            withStartDate(startDate) {
                this.startDate = startDate;
                return this;
            }

            withEndDate(endDate) {
                this.endDate = endDate;
                return this;
            }

            withAmount(amount) {
                this.amount = amount;
                return this;
            }

            withMandatetype(mandatetype) {
                this.mandatetype = mandatetype;
                return this;
            }

            withMaxNoOfDebits(maxNoOfDebits) {
                this.maxNoOfDebits = maxNoOfDebits;
                return this;
            }

            withFrequency(frequency) {
                this.frequency = frequency;
                return this;
            }

           build() {
              this.hash = sha512(`${ this.merchantId + this.serviceTypeId + this.requestId + this.amount + this.apiKey}`)
              return new MandateSetup(this);
           }
        }
        return Builder;
     }
  }


  module.exports = { MandateSetup }