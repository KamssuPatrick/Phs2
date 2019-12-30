import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';
import { Note } from '../../models/note/note.model';
import { NoteListService } from '../../services/note-list.service';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import { ImmeublePage } from '../immeuble/immeuble';

/**
 * Generated class for the ModifcationProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modifcation-produit',
  templateUrl: 'modifcation-produit.html',
})
export class ModifcationProduitPage {

 

  avis: string;
  surface: string;
  etage
  salon
  toilette
  cuisine
  chambre
  parking
  terrasse
  autre
  prix
  url
  uid
  event : any;

  value: Note = {
    avis: '',
    surface: '',
    etage: '',
    salon: '',
    toilette: '',
    cuisine: '',
    chambre: '',
    parking: '',
    terrasse: '',
    autre: '',
    prix: '',
    url: '',
    image: '',
    type: '',
    climatiseur: '',
    gardien: '',
    groupeE: '',
    jacuzzi: '',
    wifi: '',
    ascenseur: '',
    camera: '',
    typeAppartement: '',
    jardin:'',
    ville: '',
    quartier: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public afData: AngularFireDatabase,
    private noteListService: NoteListService) {

    this.value = navParams.get('item');
    this.event = navParams.get('event');

    console.log('patttt', this.event);
  }

  /*
  modifier(uid)
  {

    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment Ajouter ce produit ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked' + this.avis);
          }
        },
        {
          text: 'Modifier',
          handler: () => {
  
            this.afData.object("/services/villa/" + uid).set({avis: this.avis, surface: this.surface, etage: this.etage, 
              salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
            terrasse: this.terrasse, autre: this.autre, prix: this.prix});
  
            this.navCtrl.setRoot(VillaPage);
  
          }
        }
      ]
    });
    alert.present();
  }*/

  updateNote(note: Note) {

    if(this.event == "onModifierVilla")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierVilla").then(() => {
              this.navCtrl.setRoot(VillaPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierAppartsNM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierAppartsNM").then(() => {
              this.navCtrl.setRoot(AppartementNmPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierAppartsM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierAppartsM").then(() => {
              //this.navCtrl.setRoot(AppartementMPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierImmeuble")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierImmeuble").then(() => {
              this.navCtrl.setRoot(ImmeublePage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierBureau")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierBureau").then(() => {
              //this.navCtrl.setRoot(BureauPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierMagasin")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierMagasin").then(() => {
              //this.navCtrl.setRoot(MagasinPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.event == "onModifierBail")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.avis);
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              this.noteListService.updateNote(note, "onModifierBail").then(() => {
              //this.navCtrl.setRoot(BailPage);
              });
    
              
    
            }
          }
        ]
      });
      alert.present();
    }

    

    
  }

}
