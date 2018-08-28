/* global browser */

describe('User Login', function () {
    const UserLogin = require('../test_blocks/UserLoginBlock.js')
    let validateAddress;
    it('Create New User', function () {
     UserLogin.CreatingNewUser(browser.params.emailAddress, browser.params.password, browser.params.address);
     UserLogin.AddressStep(browser.params.address)
     UserLogin.ShippingStep();
     UserLogin.PaymentStep();
    })
  
    /*it('Login with Old User', function () {
      
    })*/
  
  })
  