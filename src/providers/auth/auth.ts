import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Events } from 'ionic-angular';

import * as firebase from 'Firebase';

@Injectable()
export class AuthProvider {

  UserUid = window.localStorage.getItem('userid');

  AdminDetails;
  ProfileDetails;
  myDetails;
  params={};

  allFav =[];
  allFav2 =[];
  allFavType = [];

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public events: Events) {
    console.log('UserUid',this.UserUid)
  }

  getFavoris(userId, type){

    console.log("tes " + type + userId);
    
    this.afDB.database.ref('Favoris').child(userId).child(type).on('value', snap =>{
      this.allFav = []
      //let keyyy=[];
      var res = snap.val()
     // keyyy= Object.keys(snap.val());
  
      for(var i in res){
        this.allFav.push(res[i]);
       // this.allFav2 = keyyy[i];

        //console.log("tes " + this.allFav2)
        
      }

      this.events.publish('favoris');

    })

  }

  getTypes(type){

    console.log("tes " + type );
    
    this.afDB.database.ref('services').child(type).on('value', snap =>{
      this.allFavType = [];
      //let keyyy=[];
      var res = snap.val()
     // keyyy= Object.keys(snap.val());
  
      for(var i in res){
        this.allFavType.push(res[i]);
       // this.allFav2 = keyyy[i];

        //console.log("tes " + this.allFav2)
        
      }

      this.events.publish('typesElement');

    })

  }



  getUserDetails(){
      var promise = new Promise((resolve, reject) =>{
        this.afDB.database.ref('users').child(this.UserUid).once('value', snap =>{
          var res = snap.val();
          resolve(res);
        }).catch((err)=>{
          reject(err);
        });       
      });
    return promise;
  }


  getMyDetails(){
    this.afDB.database.ref('users').child(this.UserUid).on('value', snap =>{
        
        this.myDetails ={
          "email":snap.val().email,
          "prenom":snap.val().prenom,
          "profession":snap.val().profession,
          "societe":snap.val().societe,
          "telephone":snap.val().telephone,
          "username":snap.val().username,
          "id":this.UserUid
        }
    
      this.events.publish('myDetails')      
           
  });
}



getAdminDetails(){
  this.afDB.database.ref('users').child('QVbwfPEMT6hsoj7aWlytER7V94F2').on('value', snap =>{
   
    this.AdminDetails ={
      "email":snap.val().email,
      "prenom":snap.val().prenom,
      "profession":snap.val().profession,
      "societe":snap.val().societe,
      "telephone":snap.val().telephone,
      "username":snap.val().username,
      "id":"QVbwfPEMT6hsoj7aWlytER7V94F2"
    }

   this.events.publish('AdminDetails');
         
});
}

getAllUsers(){ 
  var keyyy;
  var imUser="";

  this.afDB.database.ref('users').child(this.UserUid).on('value', snapshot =>{
  
    keyyy = snapshot.key;
   // console.log("snapshotttttttt",snapshot.key);
    if(snapshot.val().profilPic!=""){
      imUser=snapshot.val().profilPic;
      //console.log("imgU",imUser);
    }
    else{
      imUser="../../assets/img/avatar/user1.png";
    }
    this.params={
      "uid":keyyy,
      "username": snapshot.val().username,
      "prenom": snapshot.val().prenom,
      "image": imUser,
      "profession": snapshot.val().profession,
      "societe": snapshot.val().societe,
      "telephone": snapshot.val().telephone,
      "email": snapshot.val().email
    };
   
    this.events.publish('params');
   console.log("params", this.params)
  });  
  }

  updateUser(key){
    //console.log("keyyyyyyyyyyyyyyyyyyy", key);
    return this.afDB.database.ref("users").child(key.uid).update({ 
      prenom: key.prenom,
      profession: key.profession,
      societe: key.societe,
      telephone: key.telephone,
      username: key.username,
     }); 
  }



 
}
