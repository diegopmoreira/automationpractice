/* global browser */

describe('Proceed to Checkout', function () {
    const checkout = require('../test_blocks/checkoutBlock.js')
  
    it('Checkout', function () {
     checkout.checkout(browser.params.environmentUrl);

    })

  })
  