/* global By, element */
'use strict'
const UserLoginPage = function () {
    const EC = protractor.ExpectedConditions;

    this.typeEmail = (email) => {
        element(by.id('email_create')).sendKeys(email);
    }

    this.clickCreateAccount = () => {
        element(by.id('SubmitCreate')).click();
    }

    this.selectTitle = () => {
        browser.wait(EC.visibilityOf(element(by.id('uniform-id_gender1'))), 5000);
        element(by.id('uniform-id_gender1')).click();
    }

    this.typePersonalFirstName = () => {
        element(by.id('customer_firstname')).sendKeys("Diego");
    }
    this.typePersonalLastName = () => {
        element(by.id('customer_lastname')).sendKeys("Moreira");
    }

    this.typePassword = (password) => {
        element(by.id('passwd')).sendKeys(password);

    }

    this.typeAddress = (address) => {
        element(by.id('address1')).sendKeys(address);
    }

    this.typeCity = () => {
        element(by.id('city')).sendKeys("Pelotas");
    }

    this.selectState = () => {
        element(by.id('id_state')).sendKeys('a');
    }

    this.typePostalCode = () => {
        element(by.id('postcode')).sendKeys('00000');
    }

    this.selectCountry = () => {
    }

    this.typeMobilePhone = () => {
        element(by.id('phone_mobile')).sendKeys('12345678');
    }
    this.typeAddressAlias = () => {
    }

    this.clickRegister = () => {
        element(by.id('submitAccount')).click();
    }

    this.StepAddress = (address) => {
        expect(element(by.className('address_address1')).getText()).toEqual(address);
        element(by.xpath('//button[@name="processAddress"]')).click();
        
    }
    this.StepShipping = () => {
        element(by.id('cgv')).click();

        element(by.xpath('//button[@name="processCarrier"]')).click();
      
    }

    this.StepPayment = () => {
        element(by.className('cheque')).click();
        element(by.xpath('//*[@id="cart_navigation"]/button/span]')).click();
    }
};

module.exports = new UserLoginPage();