import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PaiementMensuelPage } from '../paiement-mensuel/paiement-mensuel';
import { HistoriquePaiementPage } from '../historique-paiement/historique-paiement';

/**
 * Generated class for the DetailLogementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-logement',
  templateUrl: 'detail-logement.html',
})
export class DetailLogementPage {

  item: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailLogementPage');
  }

  PaiementM(item)
  {
    this.navCtrl.push(PaiementMensuelPage, {uidLocataire: item});
  }

  Historique(item)
  {
    this.navCtrl.push(HistoriquePaiementPage, {uidLocataire: item});
  }

}
