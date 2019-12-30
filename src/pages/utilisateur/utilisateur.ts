import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController  } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';


/**
 * Generated class for the UtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-utilisateur',
  templateUrl: 'utilisateur.html',
})
export class UtilisateurPage {

  params: any = {};
  value : any;
  Keys: any;
  ref:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {


    this.ref =  firebase.database().ref("Gerant");
    this.params.data = this.getAllUsers();
    //console.log("helllllllllooooooooooo",this.params.data);

    this.value = navParams.get('item');

    /*this.params.events = {
      'onItemClick': function(item: any) {
          //console.log("onItemClick" + this.data.items.title);
          
      },
      'onFavorite': function(item) {
          item.favorite = !item.favorite;
          console.log("onFavorite");
      }
  };*/


  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilisateurPage');
  }

  getAllUsers(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
    
      let i=0;
      
      let keyyy=[];
      if(snapshot.val() != null)
      {

      
      keyyy= Object.keys(snapshot.val());
      snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "uid": keyyy[i],
          "nomGerant": data.val().nomGerant,
          "prenomGerant": data.val().prenomGerant,
          "telephone": data.val().telephone,
          "image":"assets/img/avatar/user1.png"
        };
        i++;
      });
      
    }
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  presentLoading() {

    this.ref =  firebase.database().ref("Gerant");
    this.params.data = this.getAllUsers();

   // this.value = this.navParams.get('item');
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });

    

    /*this.params.events = {
      'onItemClick': function(item: any) {
          //console.log("onItemClick" + this.data.items.title);
          
      },
      'onFavorite': function(item) {
          item.favorite = !item.favorite;
          console.log("onFavorite");
      }
  };*/


    loader.present();
  }

}
