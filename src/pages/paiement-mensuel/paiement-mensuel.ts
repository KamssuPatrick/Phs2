import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

/**
 * Generated class for the PaiementMensuelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paiement-mensuel',
  templateUrl: 'paiement-mensuel.html',
})
export class PaiementMensuelPage {

  date: any;
  uidL
  nbremoisP
  sommePercu
  reste

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afData: AngularFireDatabase, private alertCtrl: AlertController, 
    private toastCtrl: ToastController) {

      this.uidL = this.navParams.get("uidLocataire");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaiementMensuelPage');
  }

  Paiement()
  {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Êtes vous sur de vouloir effectuer ce paiement ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Paiement',
          handler: () => {
  
           
            
            //let upload= this.dataProvider.uploadToStorage(this.myphoto, "Logis");
            
            //upload.then().then(res => {
              //console.log("this.dataProvider.url", this.dataProvider.url);
              
              
             // this.dataProvider.storeInfoToDatabase(res.metadata,"Logis","profile").then(data => {
                this.afData.database.ref("Paiement").child("Locataires").child(this.uidL).push({
                  nbremoisP: this.nbremoisP, 
                  sommePercu: this.sommePercu,
                  reste: this.reste, 
                  JourPaiement: firebase.database.ServerValue.TIMESTAMP});
                  
                

                
                 let toast= this.toastCtrl.create({
                   message: "Ajout effectué avec succès...",
                   duration:5000
                 })
                // console.log(data);
                 toast.present();
             // });
              this.navCtrl.pop();
            //});
  
          }
        }
      ]
    });
    alert.present();
  }

}
