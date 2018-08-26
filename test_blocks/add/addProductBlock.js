const addProductBlock = function () {
  const base = require('../../pages/BasePage.js')
  const ProductPage = require('../../pages/addProductPage.js')

  this.productFromLandingPage = (url) => {
    base.navigationToUrl(url);
    ProductPage.hoverProduct();
    ProductPage.clickAddToCart();
    ProductPage.continueShopping();
  }

  this.productFromWomenTab = (url) => {
    base.navigationToUrl(url);
    ProductPage.clickDressesTab();
    ProductPage.hoverProduct();
    ProductPage.clickAddToCart();
    ProductPage.continueShopping();
  }

  this.productFromDressesTab = (url) => {
    base.navigationToUrl(url);
    ProductPage.clickDressesTab();
    ProductPage.hoverProduct();
    ProductPage.clickAddToCart();
    ProductPage.continueShopping();
  }

  this.productFromTShirtsTab = (url) => {
    base.navigationToUrl(url);
    ProductPage.clickDressesTab();
    ProductPage.hoverProduct();
    ProductPage.clickAddToCart();
    ProductPage.continueShopping();
  }
}

module.exports = new addProductBlock()
