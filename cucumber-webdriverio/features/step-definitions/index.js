//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');
// var {Page} = require('../page-object/page-object');
// let page = new Page();
// let element;

defineSupportCode(({Given, When, Then}) => {
    
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');//call baseurl
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

  //I type <user> and <password>
  When(/^I type (.*) and (.*)$/, (user, pass)=>{
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(user);
    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(pass)
  })

  Then('I expect to see button profile', () => {
    // browser.waitForVisible('.usrImage', 5000);

    // var userButton = browser.element('dropDown.dropdown.btn-group');
    // var action = userButton.element('button[id="cuenta"]');
    // action.click();

    // browser.waitForVisible('button[id=cuenta]', 5000);

    browser.waitForVisible('dropDown.dropdown.btn-group', 5000);
  });
 
  //CREATE USER
  When(/^I create user with (.*) and (.*) and (.*)$/, (name, lastname, email)=>{
    var cajaSignUp = browser.element('.cajaSignUp');
    //name
    var nombreInput = cajaSignUp.element('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys(name);
    //lastname
    var lastnameInput = cajaSignUp.element('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.keys(lastname);
    //email
    var emailInput = cajaSignUp.element('input[name="correo"]');
    emailInput.click();
    emailInput.keys(email);
  })

  When('I try to signUp', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click()
  });

  // Then('I expect to see error', () => {
  //   // var cajaSignUp = browser.element('.cajaSignUp');
  //   // cajaSignUp.waitForVisible('.aviso.alert.alert-danger', 5000)
  //   browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  //   //var alertText = browser.element('.aviso.alert.alert-danger').getText();
  //   //let err = 'Ingresa tu correo'
  //   // expect(alertText).to.include(error);
  // });

});