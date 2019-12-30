import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the ProduitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit-details',
  templateUrl: 'produit-details.html',
})
export class ProduitDetailsPage {

  params: any = {};
  ref:any;
  value2 : any;
  value : any;
  links: any;
  img: any;
  index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


    this.value = navParams.get('item');
    this.img = navParams.get('image');
    this.index = navParams.get('index');

    console.log("val " + this.value + " img "+ this.img + "index "+ this.index);


    if(this.index == 0)
    {
      this.ref= firebase.database().ref("services/villa/"+ this.value);
    }

    if(this.index == 1)
    {
      this.ref= firebase.database().ref("services/appt_non_meuble/"+ this.value);
    }

    if(this.index == 2)
    {
      this.ref= firebase.database().ref("services/immeuble/"+ this.value);
    }

    if(this.index == 3)
    {
      this.ref= firebase.database().ref("services/bureau/"+ this.value);
    }

    if(this.index == 4)
    {
      this.ref= firebase.database().ref("services/magasin/"+ this.value);
    }

    if(this.index == 5)
    {
      this.ref= firebase.database().ref("services/bail/"+ this.value);
    }

    

    this.params.data = this.getAllUsers();
    this.value2=this.params.data;
    console.log("jkkjdkfjkdjfdfh" + this.value,this.value2);
    

    this.params.events = {
      'onShare': function (item: any) {
          console.log("onShare");
      },
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      }
  };

  }


  getAllUsers(){ 
    let params={};
    this.ref.on('value', function(snapshot) {
      let i=0;
        console.log(snapshot.val());
        
        params={
          "autre": snapshot.val().autre,
          "avis": snapshot.val().avis,
          "chambre":snapshot.val().chambre,
          "cuisine":snapshot.val().cuisine,
          "etage": snapshot.val().etage,
          "parking": snapshot.val().parking,
          "prix": snapshot.val().prix,
          "profilePic": snapshot.val().profilePic,
          "salon": snapshot.val().salon,
          "surface": snapshot.val().surface,
          "terrasse": snapshot.val().terrasse,
          "toilette": snapshot.val().toilette,
          "uid": snapshot.val().uid,
          "url": snapshot.val().url,
          "wifi": snapshot.val().wifi,
          "ascenseur": snapshot.val().ascenseur,
          "camera": snapshot.val().camera,
          "climatiseur": snapshot.val().climatiseur,
          "gardien": snapshot.val().gardien,
          "groupeE": snapshot.val().groupeE,
          "jacuzzi": snapshot.val().jacuzzi,
          "typeAppartement": snapshot.val().typeAppartement,
          "jardin" : snapshot.val().jardin,
          "ville" : snapshot.val().ville,
          "quartier" : snapshot.val().quartier

        };
       
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  onGalleryClick(){
    //this.navCtrl.push(GalleryImagePage);
  }

}
