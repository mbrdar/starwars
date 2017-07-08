import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  createCorrectImagePath(apiUrl: string, value: any) {
    if (value instanceof Array) {
      value.map((item) => {
        item.image = apiUrl + item.image;
      });
    } else {
      value.image = apiUrl + value.image;
    }
    return value;
  }

}
