import {TestBed, inject} from '@angular/core/testing';

import {HelperService} from './helper.service';
import {Character} from "../model/character";

describe('HelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperService]
    });
  });

  it('should create correct image link when single object is pass as parameter',
    inject([HelperService], (service: HelperService) => {
      let characterMock = new Character({name: 'Han Solo', id: 1, image: 'han_solo.jpg'});
      let api = 'http://test-api.com/';
      let result: Character;
      result = service.createCorrectImagePath(api, characterMock);
      expect(result.image).toEqual(`http://test-api.com/han_solo.jpg`);
    }));

  it('should create correct image link when array of objects is passes as parameter',
    inject([HelperService], (service: HelperService) => {
      var characters = [new Character({name: 'Han Solo', id: 1, image: 'han_solo.jpg'})];
      let api = 'http://test-api.com/';
      let result: Array<Character>;
      result = service.createCorrectImagePath(api, characters);
      expect(result[0].image).toEqual(`http://test-api.com/han_solo.jpg`);
    }));
});
