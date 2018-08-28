const checkoutBlock = function () {
    const base = require('../pages/BasePage.js')
    const CheckoutPage = require('../pages/checkoutPage.js')
  
    this.checkout = (url) => {
      base.navigationToUrl(url);
      CheckoutPage.clickCart();
      CheckoutPage.validateProduct();
      CheckoutPage.clickProceedToCheckout();
    }
  
  }
  
  module.exports = new checkoutBlock()
  