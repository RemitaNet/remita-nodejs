

class LineItem {

    constructor(build) {
      if (arguments.length === 1) {

          this.lineItemsId = build.lineItemsId
          this.beneficiaryName = build.beneficiaryName
          this.bankCode = build.bankCode
          this.beneficiaryAmount = build.beneficiaryAmount
          this.deductFeeFrom = build.deductFeeFrom
          this.beneficiaryAccount = build.beneficiaryAccount
      }
    }

    toJSON() {
        return {
            lineItemsId : this.lineItemsId,
            beneficiaryName : this.beneficiaryName,
            bankCode : this.bankCode,
            beneficiaryAmount : this.beneficiaryAmount,
            deductFeeFrom : this.deductFeeFrom,
            beneficiaryAccount : this.beneficiaryAccount

        }
    }

    static get Builder() {
      class Builder {
         constructor() {}

         withLineItemsId(lineItemsId) {
            this.lineItemsId = lineItemsId;
            return this;
         }

         withBeneficiaryName(beneficiaryName) {
          this.beneficiaryName = beneficiaryName;
          return this;
          }

          withBankCode(bankCode) {
              this.bankCode = bankCode;
              return this;
          }

          withBeneficiaryAmount(beneficiaryAmount) {
              this.beneficiaryAmount = beneficiaryAmount;
              return this;
          }

          withDeductFeeFrom(deductFeeFrom) {
              this.deductFeeFrom = deductFeeFrom;
              return this;
          }

          withBeneficiaryAccount(beneficiaryAccount) {
            this.beneficiaryAccount = beneficiaryAccount;
            return this;
        }

         build() {
            return new LineItem(this);
         }
      }
      return Builder;
   }
}

module.exports = { LineItem }