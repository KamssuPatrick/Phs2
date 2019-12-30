import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay, map } from 'rxjs/operators';
import { Maison } from '../models';
import {  AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PortService {
  ref:any;
  constructor(
    private db: AngularFireDatabase
  ) {
    this.ref =  firebase.database().ref("services");
   }

  
}
