
*Remita api for Split Payment, Mandate Setup, Mandate Request OTP, Activate Mandate, and Stop Mandate. All these made payment easy and fast.*

## Installation

Using npm:

	   $ npm i -g remita
	   $ npm i --save remita

In Node.js:
	
		const { RemitaService } =  require('remita');
		const  sha512  =  require('js-sha512').sha512;
		const  service  =  new  RemitaService.Service();
		
**SPLIT PAYMENT**
		
		const  lineItem1  =  new RemitaService.LineItem.Builder()
		.withLineItemsId('itemid1')
		.withBeneficiaryName('Oshadami Mike')
		.withBeneficiaryAccount('0360883515')
		.withBankCode('057')
		.withBeneficiaryAmount('2000')
		.withDeductFeeFrom('1')
		.build()

		  

		const  lineItem2  =  new  RemitaService.LineItem.Builder()
		.withLineItemsId('itemid2')
		.withBeneficiaryName('Ogunseye Mujib')
		.withBeneficiaryAccount('4017904612')
		.withBankCode('057')
		.withBeneficiaryAmount('5000')
		.withDeductFeeFrom('0')
		.build()

		
		const  splitPaymentJSON  =  new  RemitaService.SplitPayment.Builder()
		.withMerchantId('1509334786934')
		.withServiceTypeId('1509323500888')
		.withTotalAmount('7000')
		.withPayerName('Oshadami Mike')
		.withPayerEmail('oshadami@example.com')
		.withPayerPhone('08012345678')
		.withOrderId('POS345599')
		.withResponseurl('www.yourresponseurl.com')
		.withLineItems(\[lineItem1, lineItem2\])
		.withApiKey('498716')
		.build()
		.toJSON()

		service.splitPaymentService(splitPaymentJSON)
		.then((body)=>console.log(body))
		.catch((err)=>console.log(err));


**MANDATE SETUP**

		const  mandateSetupJSON  =  new  RemitaService.MandateSetup.Builder()
		.withMerchantId('1509371036019')
		.withServiceTypeId('1509367311925')
		.withApiKey('QUxMVEVDSDEyMzR8QUxMVEVDSA==')
		.withPayerName('Oshadami Mike')
		.withPayerEmail('oshadami@example.com')
		.withPayerPhone('08012345678')
		.withPayerBankCode('057')
		.withPayerAccount('0012618858')
		.withRequestId('35457353801')
		.withAmount('5000')
		.withStartDate('06/03/2018')
		.withEndDate('12/12/2018')
		.withMandatetype('DD')
		.withMaxNoOfDebits('4')
		.withFrequency("1")
		.build()
		.toJSON()

		service.mandateSetupService(mandateSetupJSON)
		.then((body)=>console.log(body))
		.catch((err)=>console.log(err));


		service.header  = {
		'Content-Type' :  'application/json',
		MERCHANT_ID:  "1509371036019",
		API_KEY:"QUxMVEVDSDEyMzR8QUxMVEVDSA==",
		REQUEST_ID:"35457353821",
		REQUEST_TS:"2018-03-05T14:47:16+000000",
		API\_DETAILS\_HASH:  sha512(`${
		"QUxMVEVDSDEyMzR8QUxMVEVDSA==" \+ "35457353821" \+ "d0F5MVg5SmtCV0xsWERjdHEycEVMc0x2R0NqZ0hFQmx6YlZXbEtmdWVBVjkrZGhlMjU2MzVBPT0="}`) ,}

**MANDATE REQUEST OTP**

		const  mandateActivateOTPRequest  =  new  RemitaService.MandateRequestOtp('290014520466','35457353821').toJSON()
		service.mandateActivateRequestOTPService(mandateActivateOTPRequest)
		.then((body)=>console.log(body))
		.catch((err)=>console.log(err));

		  
		  

**ACTIVATE MANDATE**

		const  param1  =  new  RemitaService.Parameter().add('param1', 'OTP').add('value', '0000').object
		const  param2  =  new  RemitaService.Parameter().add('param', 'CARD').add('value', '1234').object
		const  params  = [param1, param2]

		 
		const  activateMandate  =  new  RemitaService.ActivateMandate('1520337605213', params).toJSON()
		service.activateMandateService(activateMandate)
		.then((body)=>console.log(body))
		.catch((err)=>console.log(err));

		  

**STOP MANDATE**

		const  stopMandate  =  new  RemitaService.StopMandate.Builder()
		.withApiKey('498716')
		.withMerchantId('2547933')
		.withMandateId('290007625795')
		.withRequestId('35457353800')
		.build()
		.toJSON()

		service.stopMandateService(stopMandate)
		.then((body)=>console.log(body))
		.catch((err)=>console.log(err));


## Useful links
* Join our Slack Developer/Support channel at http://bit.ly/RemitaDevSlack
    
## Support
- For all other support needs, support@remita.net
- To contribute to this repo, create an issue on what you intend to fix or update, make a PR and team will look into it and merge.
