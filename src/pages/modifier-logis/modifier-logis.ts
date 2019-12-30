import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { NoteImmeuble } from '../../models/noteImmeuble/noteImmeuble.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { NoteListService } from '../../services/note-list.service';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import { NoteLogis } from '../../models/note2/noteLogis.model';

/**
 * Generated class for the ModifierLogisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modifier-logis',
  templateUrl: 'modifier-logis.html',
})
export class ModifierLogisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public afData: AngularFireDatabase,
    private noteListService: NoteListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierLogisPage');
  }

  updateNote(noteLogis: NoteLogis) {

    
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment effectuer cette modification ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Modifier',
          handler: () => {
  
            this.noteListService.updateNoteLogis(noteLogis).then(() => {
            this.navCtrl.setRoot(AppartementNmPage);
            });
  
            
  
          }
        }
      ]
    });
    alert.present();

}


}
