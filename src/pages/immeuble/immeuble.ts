import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import * as firebase from 'firebase/app';
/**
 * Generated class for the ImmeublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-immeuble',
  templateUrl: 'immeuble.html',
})
export class ImmeublePage {

  params: any = {};
  ref: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {


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


  getAllUsers(){ 
		let params={"titre" : "Immeuble","items":[]};
		let items=[];
		this.ref.on('value', function(snapshot) {
		  let i=0;
		  
      let keyyy=[];
      
      let link: any;
      if(snapshot.val() != null)
      {

      
		  keyyy= Object.keys(snapshot.val());
		  snapshot.forEach(function(data){
        let propic:any;
		  
        let nn= firebase.database().ref(`files/Immeuble/profile/${data.val().profilePic}`);
        nn.on('value',  function(idPP){
          propic=idPP;
          console.log("propic: ",propic.val().fullPath);
          let urli=propic.val().fullPath;
          var storage = firebase.storage();
          var pathReference = storage.ref();
          
          
          pathReference.child(urli).getDownloadURL().then(function(url) {
            link=url;

            params.items[i]={
              "uid": keyyy[i],
              "autre": data.val().autre,
              "nomImmeuble": data.val().nomImmeuble,
              "nbreEtage": data.val().nbreEtage,
              "nbreChambre": data.val().nbreChambre,
              "nbreAppart": data.val().nbreAppart,
              "nbreStudio": data.val().nbreStudio,
              "image": link,
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
		  
    }
		});
		console.log("helllllllllooooooooooo",params)
	   return params;
		
    }
    
    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });

    this.ref =  firebase.database().ref("Immeuble");
    this.params.data = this.getAllUsers();
    loader.present();

    }


}
