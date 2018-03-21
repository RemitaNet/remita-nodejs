const { Service } = require('./Services');
const { SplitPayment } = require( '../remita/models/SplitPayment')
const { LineItem }  = require( '../remita/models/LineItem')
const { MandateSetup }  = require( '../remita/models/MandateSetup')
const { ActivateMandate }  = require( '../remita/models/ActivateMandate')
const { Parameter }  = require( '../remita/models/Parameter')
const { MandateRequestOtp }  = require( '../remita/models/MandateRequestOtp')
const { StopMandate }  = require( '../remita/models/StopMandate')

var RemitaService = { Service, SplitPayment, LineItem, MandateSetup, 
                   ActivateMandate, Parameter, MandateRequestOtp,
                   StopMandate };
module.exports =  {RemitaService};