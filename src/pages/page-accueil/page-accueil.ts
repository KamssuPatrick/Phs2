import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../../services';
import { Subscription } from 'rxjs';
import { Maison } from '../../models';
import { ProduitPage } from '../produit/produit';
import * as firebase from 'firebase/app';
import { ProduitDetailsPage } from '../produit-details/produit-details';


/**
 * Generated class for the PageAccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-accueil',
  templateUrl: 'page-accueil.html',
})
export class PageAccueilPage {

  maisons: Maison[];
  maison: Maison;
  maisonSubscription: Subscription;


  params: any = {};
  img: any

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

  userId: any;
  params1: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, private portService: PortService) {

    this.userId = firebase.auth().currentUser.uid;

    this.ref =  firebase.database().ref("services").child('bureau');
    this.params = this.getAllUsers();

    this.ref1 =  firebase.database().ref("services").child('villa');
    this.params1 = this.getAllUsers1();

    this.ref2 =  firebase.database().ref("services").child('magasin');
    this.params2 = this.getAllUsers2();

    this.ref3 =  firebase.database().ref("services").child('immeuble');
    this.params3 = this.getAllUsers3();

    this.ref4 =  firebase.database().ref("services").child('bail');
    this.params4 = this.getAllUsers4();

    this.ref5 =  firebase.database().ref("services").child('appt_non_meuble');
    this.params5 = this.getAllUsers5();

    this.ref6 =  firebase.database().ref("services").child('appt_meuble');
    this.params6 = this.getAllUsers6();
  }

 
  filterPorts(maisons: Maison[], text: string) {
    return maisons.filter(maison => {
      return maison.avis.toLowerCase().indexOf(text) !== -1;
    });
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  searchPorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    
  }

  detailss()
  {
    //this.navCtrl.push(Tabs6Page);
  }

  detail2(index){

    this.navCtrl.push(ProduitPage, {pat: index});
  }


  getAllUsers(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value',  function(snapshot) {
      let i=0;
    
      
      let keyyy=[];
      let link: any;
      
      if(snapshot != null || snapshot != '')
      {
        keyyy= Object.keys(snapshot.val());

        console.log("isi par");

        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/bureau/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
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
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
      }

      else
      {
        console.log("isi par");
      }

     
      
     
    });

    console.log("helllllllllooooooooooo" + this.value,params)
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

   /* amenagement()
    {
      this.navCtrl.push(AmenagementPage);
    }

    demenagement()
    {
      this.navCtrl.push(DemenagementPage);
    }

    vente()
    {
      this.navCtrl.push(Tabs2Page);
    }
*/

 

}
