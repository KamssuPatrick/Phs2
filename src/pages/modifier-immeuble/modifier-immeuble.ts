import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { NoteImmeuble } from '../../models/noteImmeuble/noteImmeuble.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { NoteListService } from '../../services/note-list.service';
import { ImmeublePage } from '../immeuble/immeuble';

/**
 * Generated class for the ModifierImmeublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modifier-immeuble',
  templateUrl: 'modifier-immeuble.html',
})
export class ModifierImmeublePage {

  value: NoteImmeuble = {
    autre: '',
    nomImmeuble: '',
    nbreEtage: '',
    nbreChambre: '',
    nbreAppart: '',
    nbreStudio: '',
    image: '',
    ville: '',
    quartier: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public afData: AngularFireDatabase,
    private noteListService: NoteListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierImmeublePage');
  }

  updateNote(noteImmeuble: NoteImmeuble) {

    
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
    
              this.noteListService.updateNoteImmeuble(noteImmeuble).then(() => {
              this.navCtrl.setRoot(ImmeublePage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
  
  }

}
