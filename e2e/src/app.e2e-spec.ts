import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Landing Page', () => {
    page.navigateToLanding();
    element(by.css('[name="user"]')).sendKeys('gill');
    element(by.css('[name="password"]')).sendKeys('dilraj');
    page.getsignUpButton().click();
    // page.navigateTo();
    browser.pause();
  });
  it('Registration form heading', () => {
    expect(page.getParagraphText()).toBe('Registration only 3 steps away');
  });
  it('CustomerId', () => {
    browser.pause();
    expect(page.getButton().getAttribute('value')).toBe('gill');
    expect(page.getsubmitButton().getAttribute('value')).toBe('Next');
  });
  it('button next value', () => {
    browser.pause();
    expect(page.getsubmitButton().getAttribute('value')).toBe('Next');

  });
  xit('button next value', () => {
    page.getsubmitButton().click();
    browser.pause();
    browser.pause();
    browser.pause();
  });
});
