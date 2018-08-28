/* global By, element */
'use strict'
const CheckoutPage = function () {
    const EC = protractor.ExpectedConditions;

    this.clickCart = () => {
        element(by.css('.shopping_cart > a > b')).click();
    }

    this.validateProduct = () => {
        browser.wait(EC.invisibilityOf(element(by.id('emptyCartWarning'))), 5000);
    }

    this.clickProceedToCheckout = () => {
        element(by.className('standard-checkout')).click();
    }

};

module.exports = new CheckoutPage();
