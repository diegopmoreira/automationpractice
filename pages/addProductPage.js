/* global By, element */
'use strict'
const addProductpage = function () {
  const EC = protractor.ExpectedConditions;
  
  this.hoverProduct = () => {
    productContainer = element(by.className('product-container'));
    browser.driver.actions().mouseMove(productContainer);
  }

  this.clickAddToCart = () => {
    browser.wait(EC.elementToBeClickable(element(by.className('ajax_add_to_cart_button'))), 5000);
    element(by.className('ajax_add_to_cart_button')).click();
  }

  this.continueShopping = () => {
    browser.wait(EC.visibilityOf(element(by.id('layer_cart'))), 5000);
    element(by.xpath('//span[@title="Continue shopping"]')).click();
    
  
  }


  
};

module.exports = new addProductPage();
