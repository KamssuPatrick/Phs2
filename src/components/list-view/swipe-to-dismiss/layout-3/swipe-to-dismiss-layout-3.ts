import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ItemSliding, AlertController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'swipe-to-dismiss-layout-3',
    templateUrl: 'swipe-to-dismiss.html'
})
export class SwipeToDismissLayout3 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }

        if( event == "onItemClick")
        {
            let alert = this.alertCtrl.create({
                title: 'Alert',
                message: 'Vous devez disposer d\'un compte premium pour avoir accès à ces informations',
                buttons: [
                  {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => {
                      //this.navCtrl.push(ProduitVentePage);
                    }
                  },
                  {
                    text: 'Souscrire',
                    handler: () => {
            
                      //this.navCtrl.push(PaiementPage);
            
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
        let index = this.data.items.indexOf(item);
        if (index > -1) {
            this.data.items.splice(index, 1);
        }
    }
}
