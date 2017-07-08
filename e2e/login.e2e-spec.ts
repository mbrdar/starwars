import {browser, by, element} from "protractor/built";

describe('starWars App login', () => {

  beforeEach(() => {
    browser.get('/');
  });

  let elements = {
    wrapper: {
      charactersPage: element(by.id('characters')),
      moviesPage: element(by.id('movies')),
      starShipsPage: element(by.id('starShips')),
      vehiclesPage: element(by.id('vehicles')),
    },
    navigation: {
      characters: element(by.id('charactersNavigation')),
      movies: element(by.id('moviesNavigation')),
      vehicles: element(by.id('vehiclesNavigation')),
      starShips: element(by.id('starShipsNavigation')),
    },
    labels: {
      loginMessage: element(by.id('loginMessage'))
    },
    fields: {
      username: element(by.id('username')),
      password: element(by.id('password')),
      loginButton: element(by.id('loginBtn')),
      logOutButton: element(by.id('logOutBtn'))
    }
  };

  it('should init username and password fields correctly', () => {
    expect(elements.fields.username.getText()).toEqual('');
    expect(elements.fields.password.getText()).toEqual('');
    expect(elements.fields.username.getAttribute('placeholder')).toEqual('username');
    expect(elements.fields.password.getAttribute('placeholder')).toEqual('password');
    expect(elements.fields.loginButton.isPresent()).toBeTruthy();
    expect(elements.fields.logOutButton.isPresent()).toBeFalsy();
  });

  it('should be able to access unprotected areas', function () {
    elements.navigation.movies.click();
    expect(elements.wrapper.moviesPage.isPresent()).toBeTruthy();
    expect(elements.wrapper.charactersPage.isPresent()).toBeFalsy();
    elements.navigation.characters.click();
    expect(elements.wrapper.moviesPage.isPresent()).toBeFalsy();
    expect(elements.wrapper.charactersPage.isPresent()).toBeTruthy();
  });

  it('should be unable to access protected areas', function () {
    elements.navigation.vehicles.click();
    expect(elements.wrapper.vehiclesPage.isPresent()).toBeFalsy();
    elements.navigation.starShips.click();
    expect(elements.wrapper.starShipsPage.isPresent()).toBeFalsy();
  });

  it('should log in successfully', function () {
    elements.fields.username.sendKeys('username');
    elements.fields.password.sendKeys('password');
    elements.fields.loginButton.click();
    expect(elements.labels.loginMessage.getText()).toEqual('Signed in as username');
    expect(elements.fields.logOutButton.isPresent()).toBeTruthy();
    expect(elements.fields.loginButton.isPresent()).toBeFalsy();
  });

  it('should be able to access protected areas after successful login', function () {
    elements.navigation.vehicles.click();
    expect(elements.wrapper.vehiclesPage.isPresent()).toBeTruthy();
    elements.navigation.starShips.click();
    expect(elements.wrapper.starShipsPage.isPresent()).toBeTruthy();
  });

  it('should log out successfully', function () {
    elements.fields.logOutButton.click();
    expect(elements.labels.loginMessage.isPresent()).toBeFalsy();
    expect(elements.fields.logOutButton.isPresent()).toBeFalsy();
    expect(elements.fields.loginButton.isPresent()).toBeTruthy();

    expect(elements.wrapper.charactersPage.isPresent()).toBeTruthy();

    elements.navigation.vehicles.click();
    expect(elements.wrapper.vehiclesPage.isPresent()).toBeFalsy();
    elements.navigation.starShips.click();
    expect(elements.wrapper.starShipsPage.isPresent()).toBeFalsy();
  });

});
