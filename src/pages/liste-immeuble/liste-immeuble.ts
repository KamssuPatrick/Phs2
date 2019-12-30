import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import { AjoutLogisPage } from '../ajout-logis/ajout-logis';
import { DetailLogementPage } from '../detail-logement/detail-logement';
import { AjoutGerantPage } from '../ajout-gerant/ajout-gerant';

import * as firebase from 'firebase/app';

/**
 * Generated class for the ListeImmeublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-liste-immeuble',
  templateUrl: 'liste-immeuble.html',
})
export class ListeImmeublePage {

  
  build: any;
  items: any;
  
  ref: any;
  params: any = {};
  uid: any;
  today: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.build = navParams.get('build');
    this.uid = navParams.get('uid');
    this.today = Date.now();

    this.items = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeImmeublePage ' + this.today);
    
    this.ref =  firebase.database().ref("Immeubles").child(this.uid).child("Locataires");
     this.params = this.getLocataires();
  }

  addItem(uid)
  {
    this.navCtrl.push(AjoutGerantPage, {uid: uid});
  }

  openItem(item) {
    this.navCtrl.push(DetailLogementPage, {
      item: item
    });
  }

  addBuilding(uid)
  {
    this.navCtrl.push(AjoutLogisPage, {uid: uid})
  }

  getLocataires(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;

      let keyyy=[];
      
    if(snapshot.val())
    {

      let link: any;
		  keyyy= Object.keys(snapshot.val());
      
      snapshot.forEach(function(data){
        console.log(i);

/*
        var d = new Date(keyyy[i].Time)
 
        var years = d.getFullYear()
        var month = 1 + d.getMonth()
        var days =  d.getDate()
        var hours = d.getHours()
        var minutes = '0' + d.getMinutes()

        var messageTime1 = years + '/' + month + '/' + days
        var messageTime2 = years + '/' + month
        var messageTime3 = years

        if(messageTime1 == todayRes1){
          this.allMessages[key].Time = hours + ":" + minutes.substr(-2)
        }else{
           if(messageTime2 == todayRes2){
              var DN = toDays + days
              if(DN = 1){
                this.allMessages[key].Time = 'Yesterday , ' + hours + ":" + minutes.substr(-2)
              }else if(DN < 7){
                this.allMessages[key].Time = days[DN] + hours + ":" + minutes.substr(-2)
              }else{
                this.allMessages[key].Time = months[month] + ',' + days
              }
           }else{
             if(todayRes3 == messageTime3){
              this.allMessages[key].Time = months[month] + "," + days
             }else{
              this.allMessages[key].Time = months[month] + "," + days + ',' + years
             }
             
           }
        } 
*/


        params.items[i]={
          "autre": data.val().autre,
          "uid" :  keyyy[i],
          "etage": data.val().etage,
          "nbreChambre": data.val().nbreChambre,
          "nbreCuisine": data.val().nbreCuisine,
          "nbreDouche": data.val().nbreDouche,
          "nbreSalon": data.val().nbreSalon,
          "nomLocataire": data.val().nomLocataire,
          "prenomLocataire": data.val().prenomLocataire,
          "telephoneLocataire": data.val().telephoneLocataire,
          "Time": data.val().Time,
          "profilePic": "assets/img/speakers/bear.jpg",
          "loyer": data.val().loyer
        };
        i++;
      });
      
    }
    });
    console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  getTime()
  {
    /*var d = new Date(this.allMessages[key].Time)
 
          var years = d.getFullYear()
          var month = 1 + d.getMonth()
          var days =  d.getDate()
          var hours = d.getHours()
          var minutes = '0' + d.getMinutes()
 
          var messageTime1 = years + '/' + month + '/' + days
          var messageTime2 = years + '/' + month
          var messageTime3 = years
 
          if(messageTime1 == todayRes1){
            this.allMessages[key].Time = hours + ":" + minutes.substr(-2)
          }else{
             if(messageTime2 == todayRes2){
                var DN = toDays + days
                if(DN = 1){
                  this.allMessages[key].Time = 'Yesterday , ' + hours + ":" + minutes.substr(-2)
                }else if(DN < 7){
                  this.allMessages[key].Time = days[DN] + hours + ":" + minutes.substr(-2)
                }else{
                  this.allMessages[key].Time = months[month] + ',' + days
                }
             }else{
               if(todayRes3 == messageTime3){
                this.allMessages[key].Time = months[month] + "," + days
               }else{
                this.allMessages[key].Time = months[month] + "," + days + ',' + years
               }
               
             }
          }*/
 
 
  }


}
