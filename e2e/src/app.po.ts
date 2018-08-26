import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {return browser.get('/registration/dilraj');
  }
  navigateToLanding() {return browser.get('/landing');
}
  getParagraphText() {
    return element(by.css('h3')).getText();
  }
  getButton() {
    return element(by.css('#customerID'));
  }
  getsubmitButton() {
    return element(by.css('#submitButton'));
  }
  getsignUpButton() {
    return element(by.id('signUp'));
  }
  setName() {
    const dobInput = element(by.model('nameI'));
    dobInput.sendKeys('dilraj');
  }
  getName() {
    return element(by.css('#name'));
  }
}
