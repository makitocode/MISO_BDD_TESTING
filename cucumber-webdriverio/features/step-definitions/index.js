//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');
var {Page} = require('../page-object/page-object');
let page = new Page();
let element;

defineSupportCode(({Given, When, Then}) => {
    
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');//call baseurl
    browser.waitForVisible('button=Cerrar', 3000);
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');
    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  //--step 1.4
  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);
    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });

  Then('I expect to see {string}', error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
  });


 // To Project version model
    Given("I go to the website {string}", async (url) => {
        page.goToUrl(url);
        await page.pause(200);
    });

    // Given("I get element with class {string}", async (elementClass) => {
    //     element = await page.findByClass(elementClass);
    //     await page.pause(200);
    // });

    // Given("I get element with name {string}", async (elementName) => {
    //     element = await page.findByName(elementName);
    //     await page.pause(200);
    // });

    // Given("I send text {string}", async (text) => {
    //     await element.setValue(text);
    //     await page.pause(200);
    // });

    // Given("I get element with id {string}", async (elementId) => {
    //     element = await page.findById(elementId);
    //     await page.pause(200);
    // });

    // Given("I click", async () => {
    //     await element.click();
    //     await page.pause(200);
    // });


});