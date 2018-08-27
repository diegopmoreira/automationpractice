const UserLoginBlock = function () {
    const UserLoginPage = require('../pages/UserLoginPage.js')
  
    this.CreatingNewUser = (email, password, address) => {
      UserLoginPage.typeEmail(email);
      UserLoginPage.clickCreateAccount();
      UserLoginPage.selectTitle();
      UserLoginPage.typePersonalFirstName();
      UserLoginPage.typePersonalLastName();
      UserLoginPage.typePassword(password);
      UserLoginPage.typeAddress(address);
      UserLoginPage.typeCity();
      UserLoginPage.selectState();
      UserLoginPage.typePostalCode();
      UserLoginPage.selectCountry();
      UserLoginPage.typeMobilePhone();
      UserLoginPage.typeAddressAlias();
      UserLoginPage.clickRegister();
    }
    this.AddressStep = (address) => {
        UserLoginPage.StepAddress(address);
    }

    this.ShippingStep = () => {
      
      UserLoginPage.StepShipping();
      
    }

    this.PaymentStep = () => {
      UserLoginPage.StepPayment();
      browser.sleep(10000);
    }
  
  }
  
  module.exports = new UserLoginBlock()
  