/* global browser */

describe('Add Product to Cart', function () {
  const addProduct = require('../../test_blocks/login/addProductBlock.js')

  it('Add Product from Landing Page', function () {
   addProduct.productFromLandingPage(browser.params.environmentUrl);
  })

  it('Add Product from Women Tab', function () {
    addProduct.productFromWomenTab(browser.params.environmentUrl);
  })
  it('Add Product from Dresses Tab', function () {
    addProduct.productFromDressesTab(browser.params.environmentUrl);
    
  })
  it('Add Product from T-Shirts Tab', function () {
    addProduct.productFromTShirtsTab(browser.params.environmentUrl);
  })
})
