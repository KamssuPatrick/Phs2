import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the HistoriquePaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-historique-paiement',
  templateUrl: 'historique-paiement.html',
})
export class HistoriquePaiementPage {

  ref: any;
  params: any = {};
  uidLocataire: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.uidLocataire = this.navParams.get("uidLocataire");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriquePaiementPage');
    this.ref =  firebase.database().ref("Paiement").child("Locataires").child(this.uidLocataire);
     this.params = this.getPaiement();
  }

  getPaiement(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;

      let keyyy=[];
      
      let link: any;
		  keyyy= Object.keys(snapshot.val());
      
      snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "reste": data.val().reste,
          "uid" :  keyyy[i],
          "nbremoisP": data.val().nbremoisP,
          "sommePercu": data.val().sommePercu
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params)
   return params;
    
  }

}
