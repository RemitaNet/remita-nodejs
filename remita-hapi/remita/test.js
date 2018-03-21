const { RemitaService } = require('./init')
const sha512 = require('js-sha512').sha512


const service =  new RemitaService.Service();
var handler = (err, httpResponse, body) => {
  console.log("RESULT  : ", err, body);
}


// // SPLIT PAYMENT
// const lineItem1 = new RemitaService.LineItem.Builder()
// .withLineItemsId('itemid1')
// .withBeneficiaryName('Oshadami Mike')
// .withBeneficiaryAccount('0360883515')
// .withBankCode('057')
// .withBeneficiaryAmount('2000')
// .withDeductFeeFrom('1')
// .build()

// const lineItem2 = new RemitaService.LineItem.Builder()
// .withLineItemsId('itemid2')
// .withBeneficiaryName('Ogunseye Mujib')
// .withBeneficiaryAccount('4017904612')
// .withBankCode('057')
// .withBeneficiaryAmount('5000')
// .withDeductFeeFrom('0')
// .build()


// const splitPaymentJSON = new RemitaService.SplitPayment.Builder()
// .withMerchantId('1509334786934')
// .withServiceTypeId('1509323500888')
// .withTotalAmount('7000')
// .withPayerName('Oshadami Mike')
// .withPayerEmail('oshadami@example.com')
// .withPayerPhone('08012345678')
// .withOrderId('POS345599')
// .withResponseurl('www.yourresponseurl.com')
// .withLineItems([lineItem1, lineItem2])
// .withApiKey('498716')
// .build()
// .toJSON()

// service.splitPaymentService(splitPaymentJSON)
// .then((body)=>console.log(body))
// .catch((err)=>console.log(err));
//service.splitPaymentService(splitPaymentJSON, handler);


// MANDATE SETUP
// const mandateSetupJSON = new RemitaService.MandateSetup.Builder()
// .withMerchantId('1509371036019')
// .withServiceTypeId('1509367311925')
// .withApiKey('QUxMVEVDSDEyMzR8QUxMVEVDSA==')
// .withPayerName('Oshadami Mike')
// .withPayerEmail('oshadami@example.com')
// .withPayerPhone('08012345678')
// .withPayerBankCode('057')
// .withPayerAccount('0012618858')
// .withRequestId('35457353801')
// .withAmount('5000')
// .withStartDate('06/03/2018')
// .withEndDate('12/12/2018')
// .withMandatetype('DD')
// .withMaxNoOfDebits('4')
// .withFrequency("1")
// .build()
// .toJSON()

// console.log("JSON : " , mandateSetupJSON)
// service.mandateSetupService(mandateSetupJSON)
// .then((body)=>console.log(body))
// .catch((err)=>console.log(err));


service.header = {
  'Content-Type' : 'application/json',
  MERCHANT_ID: "1509371036019",
  API_KEY:"QUxMVEVDSDEyMzR8QUxMVEVDSA==",
  REQUEST_ID:"35457353821",
  REQUEST_TS:"2018-03-05T14:47:16+000000",
  API_DETAILS_HASH: sha512(`${ "QUxMVEVDSDEyMzR8QUxMVEVDSA==" + "35457353821" + "d0F5MVg5SmtCV0xsWERjdHEycEVMc0x2R0NqZ0hFQmx6YlZXbEtmdWVBVjkrZGhlMjU2MzVBPT0="}`) ,
}
// // MANDATE REQUEST OTP
// const mandateActivateOTPRequest = new RemitaService.MandateRequestOtp('290014520466','35457353821').toJSON()
// service.mandateActivateRequestOTPService(mandateActivateOTPRequest)
// .then((body)=>console.log(body))
// .catch((err)=>console.log(err));


// jsonp ({"statuscode":"00","authParams":[{"description2":"Please specify the last 4 digits of your bank card","param1":"OTP","description1":"Please en
// ter your Bank OTP","param2":"CARD"}],"requestId":"35457353821","mandateId":"290014520466","remitaTransRef":"1520337605213","status":"SUCCESS"})
// ACTIVATE MANDATE
const param1 = new RemitaService.Parameter().add('param1', 'OTP').add('value', '0000').object
const param2 = new RemitaService.Parameter().add('param2', 'CARD').add('value', '1234').object
const params = [param1, param2]

const activateMandate = new RemitaService.ActivateMandate('1520337605213', params).toJSON()

service.activateMandateService(activateMandate)
.then((body)=>console.log(body))
.catch((err)=>console.log(err));

// // STOP MANDATE
// const stopMandate = new RemitaService.StopMandate.Builder()
// .withApiKey('498716')
// .withMerchantId('2547933')
// .withMandateId('290007625795')
// .withRequestId('35457353800')
// .build()
// .toJSON()

// service.stopMandateService(stopMandate)
// .then((body)=>console.log(body))
// .catch((err)=>console.log(err));


