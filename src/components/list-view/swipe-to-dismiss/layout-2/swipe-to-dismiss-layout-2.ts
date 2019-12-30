import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ItemSliding, NavController, AlertController } from 'ionic-angular';
import { ModifcationProduitPage } from '../../../../pages/modifcation-produit/modifcation-produit';
import { AjoutProduitPage } from '../../../../pages/ajout-produit/ajout-produit';
import { AppartementNmPage } from '../../../../pages/appartement-nm/appartement-nm';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../../../../pages/villa/villa';
import { ImmeublePage } from '../../../../pages/immeuble/immeuble';
import { AjoutImmmeublePage } from '../../../../pages/ajout-immmeuble/ajout-immmeuble';
import { ModifierImmeublePage } from '../../../../pages/modifier-immeuble/modifier-immeuble';

@IonicPage()
@Component({
    selector: 'swipe-to-dismiss-layout-2',
    templateUrl: 'swipe-to-dismiss.html'
})
export class SwipeToDismissLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    arrData : any

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afData: AngularFireDatabase) {

      //this.arrData = this.afData.list("/services/villa").valueChanges();
      //console.log("liste", this.arrData);
     }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }


        // on modifier


        if( event == "onModifierImmeuble")
        {
            this.navCtrl.push(ModifierImmeublePage, {item: item});
        }


        //On Ajouter 


        if( event == "onAjouterImmeuble")
        {
            this.navCtrl.push(AjoutImmmeublePage);
        }


        // On supprimer


        if( event == "onSupprimerImmeuble")
        {
          let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Voulez-vous vraiment supprimer cet Immeuble ?',
            buttons: [
              {
                text: 'Annuler',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Supprimer',
                handler: () => {
                  console.log('Buy clicked');

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/Immeuble").remove(item.uid);
                    this.navCtrl.setRoot(ImmeublePage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        
    }

    undo = (slidingItem: ItemSliding) => {
        slidingItem.close();
    }

    delete = (item: any): void => {

        let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Voulez-vous vraiment supprimer ce produit ?',
            buttons: [
              {
                text: 'Annuler',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Supprimer',
                handler: () => {
                  console.log('Buy clicked');

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/Immeuble").remove(item);
                    this.navCtrl.setRoot(ImmeublePage);
          
                }
              }
            ]
          });
          alert.present();
        
        
    }
}
