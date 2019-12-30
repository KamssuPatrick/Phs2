import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from "angularfire2/storage";


/**
 * Generated class for the VillaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-villa',
  templateUrl: 'villa.html',
})
export class VillaPage {

  params: any = {};
  ref: any;
  urlImg:any;
  constructor(public afStorage: AngularFireStorage, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.presentLoading();
    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("items");
         //this.navCtrl.push(ModifcationProduitPage);
       },
      'onDelete': function (item: any) {
         console.log("Delete");
       },
      'onButtonClick': function (item: any) {
         console.log("Info");
       },
       'onModifierButton': function (item: any) {
          console.log("modifier");
          
        }
     };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VillaPage');
  }

  getAllUsers(){ 
		let params={"titre" : "Villa","items":[]};
		let items=[];
    	this.ref.on('value',  function(snapshot) {
      let i=0;
      
		  
		  let keyyy=[];
		  let link: any;
		  keyyy= Object.keys(snapshot.val());
		  snapshot.forEach(function(data){
        let propic:any;
        let nn= firebase.database().ref(`files/villa/profile/${data.val().profilePic}`);
        nn.on('value',  function(idPP){
          propic=idPP;
          console.log("propic: ",propic.val().fullPath);
          let urli=propic.val().fullPath;
          var storage = firebase.storage();
          var pathReference = storage.ref();
          
          
          pathReference.child(urli).getDownloadURL().then(async function(url) {
            link=url;

            params.items[i]= await {
              "uid": keyyy[i],
              "autre": data.val().autre,
              "avis": data.val().avis,
              "chambre": data.val().chambre,
              "cuisine": data.val().cuisine,
              "parking": data.val().parking,
              "prix": data.val().prix,
              "salon": data.val().salon,
              "surface": data.val().surface,
              "terrasse": data.val().terrasse,
              "toilette": data.val().toilette,
              "etage": data.val().etage,
              "image": link,
              "url": data.val().url,
              "type": data.val().type,
              "climatiseur": data.val().climatiseur,
              "gardien": data.val().gardien,
              "groupeE": data.val().groupeE,
              "jacuzzi": data.val().jacuzzi,
              "wifi": data.val().wifi,
              "ascenseur": data.val().ascenseur,
              "camera": data.val().camera,
              "typeAppartement": data.val().typeAppartement,
              "jardin": data.val().jardin,
              "ville": data.val().ville,
              "quartier": data.val().quartier
            };
            console.log("ImgUrlqsdqsdqsdq",i);
			      i++;
            
          }).catch(function(error) {
            // Handle any errors
            console.log("error admin: ",error)
          });
        });

			
		  });
		  
		 
		});
		console.log("helllllllllooooooooooo",params)
	   return params;
		
    }
    
    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });

    this.ref =  firebase.database().ref("services/villa");
    this.params.data= this.getAllUsers();
    loader.present();
    
    

    }


}
