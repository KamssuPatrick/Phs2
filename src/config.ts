import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
	apiKey: "AIzaSyDsEctUgC5_DpvX4OfK25MYsE9HPecJGOg",
    authDomain: "phs2019.firebaseapp.com",
    databaseURL: "https://phs2019.firebaseio.com",
    projectId: "phs2019",
    storageBucket: "phs2019.appspot.com",
    messagingSenderId: "35024273820",
    appId: "1:35024273820:web:994ae0ddeb1d3afdb44859"
	}
};

