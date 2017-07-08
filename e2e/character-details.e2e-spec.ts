import {StarwarsPage} from './app.po';
import {browser, by, element} from "protractor/built";

describe('starWars App character details page', () => {

  beforeEach(() => {
    browser.get('/characters/1');
  });

  let character = {
    wrapper: {
      page: element(by.id('characterDetails')),
    },
    labels: {
      name: element(by.id('characterName'))
    }
  };


  it('should init page correctly', () => {
    expect(character.wrapper.page.isPresent()).toBeTruthy();
    expect(character.labels.name.getText()).toEqual('Luke Skywalker');
  });

});
