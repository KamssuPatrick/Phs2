import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController } from 'ionic-angular';
import { GestionUtilisateurPage } from '../../../../pages/gestion-utilisateur/gestion-utilisateur';
@IonicPage()
@Component({
  selector: 'appearance-animation-layout-4',
  templateUrl: 'appearance-animation.html'
})
export class AppearanceAnimationLayout4 {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  animateItems = [];
  animateClass: any;

  constructor(public navCtrl: NavController) {
    this.animateClass = { 'fade-in-item': true };
  }

  onEvent(event: string, item: any,index: any, e: any) {
    if (this.events[event]) {
        this.events[event](item);
    }

    if (event === "onItemClick")
    {
        //this.navCtrl.push(GestionDemePage, { item:item, index: index});
    }
}

ngOnChanges(changes: { [propKey: string]: any }) {
    let that = this;
    that.data = changes['data'].currentValue;
    if (that.data && that.data.items) {
        console.log("heeeeeeeeeeeeeeeeeeeee", that.data.items);
        that.animateItems = [];
        for (let i = 0; i < that.data.items.length; i++) {
            setTimeout(function () {
                that.animateItems.push(that.data.items[i]);
            }, 200 * i);
        }
    }
}


}