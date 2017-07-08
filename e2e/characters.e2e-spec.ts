import {StarwarsPage} from './app.po';
import {browser, by, element} from "protractor/built";

describe('starWars App characters page', () => {

  beforeEach(() => {
    browser.get('/');
  });

  let characters = {
    wrapper: {
      page: element(by.id('characters')),
      list: element.all(by.id('character'))
    },
    fields: {
      search: element(by.id('search'))
    }
  };

  it('should display list of characters', () => {
    expect(characters.wrapper.page.isPresent()).toBeTruthy();
    expect(characters.wrapper.list.count()).toBeGreaterThan(50);
  });

  it('should init search field correctly', () => {
    expect(characters.fields.search.isDisplayed()).toBeTruthy();
    expect(characters.fields.search.getText()).toEqual('');
    expect(characters.fields.search.getAttribute('placeholder')).toEqual('Search');
  });

  it('should search for character correctly', () => {
    characters.fields.search.sendKeys('Luke');
    expect(characters.wrapper.list.count()).toBe(1);
    characters.fields.search.clear();
    characters.fields.search.sendKeys(' ');
    expect(characters.wrapper.list.count()).toBeGreaterThan(50);
  });

  it('should open character detail page', () => {
    characters.wrapper.list.first().click();
    expect(characters.wrapper.page.isPresent()).toBeFalsy();
    expect(element(by.id('characterDetails')).isDisplayed()).toBeTruthy();
  });

});
