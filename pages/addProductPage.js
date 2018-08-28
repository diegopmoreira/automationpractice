/* global By, element */
'use strict'
const addProductPage = function () {
  const EC = protractor.ExpectedConditions;
  
  this.hoverProduct = () => {
    const productContainer = element(by.className('product-container'));
    browser.driver.actions().mouseMove(productContainer).perform();
  }

  this.clickAddToCart = () => {
    browser.wait(EC.elementToBeClickable(element(by.className('ajax_add_to_cart_button'))), 5000);
    element(by.className('ajax_add_to_cart_button')).click();
  }

  this.continueShopping = () => {
    browser.wait(EC.visibilityOf(element(by.id('layer_cart'))), 5000);
    element(by.xpath('//span[@title="Continue shopping"]')).click();
  }

  this.clickWomenTab = () => {
    
    element(by.id('block_top_menu')).element(by.css('.menu-content > li:nth-child(1) > a')).click();
  }

  this.clickDressesTab = () => {
    

    element(by.id('block_top_menu')).element(by.css('.menu-content > li:nth-child(2) > a')).click();
  }

  this.clickTShirtTab = () => {
    
  
    element(by.id('block_top_menu')).element(by.css('.menu-content > li:nth-child(3) > a')).click();
  }
};

module.exports = new addProductPage();
