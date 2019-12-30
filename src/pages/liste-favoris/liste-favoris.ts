import { Component, NgZone, Input } from '@angular/core';
import { NavController, NavParams, App, LoadingController, AlertController, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProduitDetailsPage } from '../produit-details/produit-details';
import { AuthProvider } from '../../providers/auth/auth';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ListeFavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-liste-favoris',
  templateUrl: 'liste-favoris.html',
})
export class ListeFavorisPage {
  
  @Input() events: any;
  userId: any;
  params: any = {};
  params1: any = {};
  params2: any = {};
  params3: any = {};
  params4: any = {};
  params5: any = {};
  params6: any = {};

  value : any;
  Keys: any;
  ref:any;
  ref1:any;
  ref2:any;
  ref3:any;
  ref4:any;
  ref5:any;
  ref6:any;


  allFav = [];

  searchTerm: any = "";
allItems: any;
type: any;

  items: Observable<any[]>;
  
  constructor(public authProvider: AuthProvider, public navCtrl: NavController, public afData: AngularFireDatabase,
    public alertCtrl: AlertController, public chatProvider: ChatProvider,
   public auth: AuthService, public afDB: AngularFireDatabase, public ngZone: NgZone, public evente: Events, public navParams: NavParams) {

    this.userId = firebase.auth().currentUser.uid;

    this.ref =  firebase.database().ref("Favoris").child(this.userId).child('bureau');
    this.params = this.getAllUsers();

    this.ref1 =  firebase.database().ref("Favoris").child(this.userId).child('villa');
    this.params1 = this.getAllUsers1();

    this.ref2 =  firebase.database().ref("Favoris").child(this.userId).child('magasin');
    this.params2 = this.getAllUsers2();

    this.ref3 =  firebase.database().ref("Favoris").child(this.userId).child('immeuble');
    this.params3 = this.getAllUsers3();

    this.ref4 =  firebase.database().ref("Favoris").child(this.userId).child('bail');
    this.params4 = this.getAllUsers4();

    this.ref5 =  firebase.database().ref("Favoris").child(this.userId).child('appt_non_meuble');
    this.params5 = this.getAllUsers5();

    this.ref6 =  firebase.database().ref("Favoris").child(this.userId).child('appt_meuble');
    this.params6 = this.getAllUsers6();
    
    console.log("hooooooooooo",this.params.items);

    this.value = navParams.get('item');

    


  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilisateurPage');
  }

  getAllUsers(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  getAllUsers1(){ 
    let params1={"items":[]};
    let items=[];
    this.ref1.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params1.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params1)
   return params1;
    
  }

  getAllUsers2(){ 
    let params2={"items":[]};
    let items=[];
    this.ref2.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params2.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params2)
   return params2;
    
  }

  getAllUsers3(){ 
    let params3={"items":[]};
    let items=[];
    this.ref3.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params3.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params3)
   return params3;
    
  }

  getAllUsers4(){ 
    let params4={"items":[]};
    let items=[];
    this.ref4.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params4.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params4)
   return params4;
    
  }

  getAllUsers5(){ 
    let params5={"items":[]};
    let items=[];
    this.ref5.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params5.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params5)
   return params5;
    
  }

  getAllUsers6(){ 
    let params6={"items":[]};
    let items=[];
    this.ref6.on('value', function(snapshot) {
      let i=0;
      
      snapshot.forEach(function(data){
        console.log(i);
        params6.items[i]={
          "Id": data.val().Id,
          "autre": data.val().autre,
          "avis": data.val().avis,
          "chambre": data.val().chambre,
          "cuisine": data.val().cuisine,
          "etage": data.val().etage,
          "parking": data.val().parking,
          "prix": data.val().prix,
          "profilePic": data.val().profilePic,
          "salon": data.val().salon,
          "surface": data.val().surface,
          "terrasse": data.val().terrasse,
          "toilette": data.val().toilette,
          "Key": data.val().Key,
          "type": data.val().type
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params6)
   return params6;
    
  }

  
  detail( item: any, image: any, index: any)
    {
        this.navCtrl.push(ProduitDetailsPage, { item:item, image:image, index: index});
    }


      Delfavoris(type: any, key: any, item: any) {

       
         this.DelFav(this.userId, type, key, item);
        
        }
  

      
      share(card){
        //this.navCtrl.push(Tabs3Page);

      }

     
      DelFav(userId, type, key, item){



        console.log("Remove succeeded." + userId + "///" + item + " //// "+ key);
        this.afData.database.ref('Favoris').child(userId).child(type).child(key).remove().then(function() {
          console.log("Remove succeeded.")

          
          
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });

        this.params = {};
        this.params1 = {};
        this.params2 = {};
        this.params3 = {};
        this.params4 = {};
        this.params5 = {};
        this.params6 = {};

        this.ref =  firebase.database().ref("Favoris").child(this.userId).child('bureau');
        this.params = this.getAllUsers();

        this.ref1 =  firebase.database().ref("Favoris").child(this.userId).child('villa');
        this.params1 = this.getAllUsers1();

        this.ref2 =  firebase.database().ref("Favoris").child(this.userId).child('magasin');
        this.params2 = this.getAllUsers2();
    
        this.ref3 =  firebase.database().ref("Favoris").child(this.userId).child('immeuble');
        this.params3 = this.getAllUsers3();
    
        this.ref4 =  firebase.database().ref("Favoris").child(this.userId).child('bail');
        this.params4 = this.getAllUsers4();
    
        this.ref5 =  firebase.database().ref("Favoris").child(this.userId).child('appt_non_meuble');
        this.params5 = this.getAllUsers5();
    
        this.ref6 =  firebase.database().ref("Favoris").child(this.userId).child('appt_meuble');
        this.params6 = this.getAllUsers6();
      }

      
    
      ionViewDidEnter(){
        //this.authProvider.getFavoris(this.userId, this.type);
      }

  

}
