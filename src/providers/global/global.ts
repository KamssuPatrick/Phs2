import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public urli: string;

  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }

}
