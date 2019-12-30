import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { ProduitPage } from '../../../pages/produit/produit';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'image-gallery-layout-1',
  templateUrl: 'image-gallery-layout-1.html'
})
export class ImageGalleryLayout1 {
  @Input() data: any;
  @Input() events: any;

  
  params: any = {};
  ref: any;
  index

  constructor(public navCtrl: NavController, navParams: NavParams, public loadingCtrl: LoadingController) { }

  openSubGallery = (group: any, index: number): any => {
    this.navCtrl.push(group.SubGallery, {
      'group': group.items[index],
      'events': this.events,
      'layout': 1
    });

    //console.log("ici", index);
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  openSubGallerys(group: any, index: number)
  {
    

    //console.log("icicicis", index);
    this.index = index;

    this.navCtrl.push(ProduitPage, {pat: this.index});
  
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  
}
