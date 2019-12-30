import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: any = {};


  constructor(public navCtrl: NavController, private menu: MenuController) {

    this.params.data = {

      "username" : "Nom d'utilisateur",
      "password" : "Mot de passe",
      "register" : "S'inscrire",
      "login"    : "Se Connecter",
      "email"    : "Votre adresse e-mail",
      "passer"   : "Passer",
      "logo"     : "assets/img/logo/logo_rental.jpg",
      "backgroundImage" : "assets/imgs/arch.jpg",
      "iconAccount" : "icon-key",
      "iconKey" : "",
      "iconLock" : "assets/img/background/20.jpg",
      "errorPassword"       : "Le champ ne peut pas être vide.",
      "errorEmail"          : "Adresse électronique invalide.",
      "errorUser"           : "Le champ ne peut pas être vide."

    };

    this.params.events = {

      onLogin: function(params) {
        console.log('onLogin:' + JSON.stringify(params));
      },
      onRegister: function(params) {
        console.log('onRegister:' + JSON.stringify(params));
      },
      onSkip: function(params) {
        console.log('onSkip:' + JSON.stringify(params));
      },
      onFaceBook: function(params) {
        console.log('onFaceBook:' + JSON.stringify(params));
      },
      onTwitter: function(params) {
        console.log('onTwitter:' + JSON.stringify(params));
      },
      onGoogle: function(params) {
        console.log('onGoogle:' + JSON.stringify(params));
      },
      onPinterest: function(params) {
        console.log('onPinterest:' + JSON.stringify(params));
      },

    };

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }

}
