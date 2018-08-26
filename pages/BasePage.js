/* global browser */

var BasePage = function () {

    this.navigateToURL = function (url) {
        return browser.get(url);
    };

    this.getPageTitle = function () {
        return browser.getTitle();
    };
};
module.exports = new BasePage();