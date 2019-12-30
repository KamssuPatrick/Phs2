import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../providers/auth/auth';
import { AjoutImmmeublePage } from '../ajout-immmeuble/ajout-immmeuble';
import { ListeImmeublePage } from '../liste-immeuble/liste-immeuble';


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  profile = {} as Profile;
  data : any;
  user: any;
  name: any;
  email: any;
  uid: any;
  userId: any;
  ref: any;
  params: any = {};

  buildings: any;

  users = [];
  constructor(public navCtrl: NavController,
    public auth: AuthService,
    private fireAuth: AngularFireAuth) {

      //this.ngOnInit();
      //window.localStorage.setItem('userid', firebase.auth().currentUser.uid);
     // console.log('UserUid_admin',firebase.auth().currentUser.uid)
     this.ref =  firebase.database().ref("Immeubles");
     this.params = this.getImmeuble();
     

     this.buildings = [
      {
        "name": "Stone Garden",
        "profilePic": "assets/imgs/location_feed_01.png",
        "about": "Bonandjo, Douala.",
        "nbTenants":6
      },
      {
        "name": "Little Clock tower",
        "profilePic": "assets/imgs/location_feed_02.png",
        "about": "Essos, Yaoundé.",
        "nbTenants":12
      },
      {
        "name": "Play ground",
        "profilePic": "assets/imgs/location_feed_03.png",
        "about": "Mvog-Mbi, Yaoundé",
        "nbTenants":50
      },
      {
        "name": "Green park",
        "profilePic": "assets/imgs/location_feed_04.png",
        "about": "Bonapriso, Douala.",
        "nbTenants":13
      },
      {
        "name": "Woman Garden",
        "profilePic": "assets/imgs/location_feed_05.png",
        "about": "Bonapriso, Douala.",
        "nbTenants":16
      }
      
    ];

  }

  ionViewDidLoad() {
    // Put here the code you want to execute
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ref =  firebase.database().ref("Immeubles");
     this.params = this.getImmeuble();
  }

  addBuilding()
  {
    this.navCtrl.push(AjoutImmmeublePage);
  }

  openBuilding(build, uid) {
    this.navCtrl.push(ListeImmeublePage, {
      build: build, uid: uid
    });
  }
  
  getImmeuble(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;

      let keyyy=[];
      
      let link: any;
		  keyyy= Object.keys(snapshot.val());
      
      snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "autre": data.val().autre,
          "uid" :  keyyy[i],
          "nbreAppart": data.val().nbreAppart,
          "nbreChambre": data.val().nbreChambre,
          "nbreEtage": data.val().nbreEtage,
          "nbreStudio": data.val().nbreStudio,
          "ville": data.val().ville,
          "nomImmeuble": data.val().nomImmeuble,
          "quartier": data.val().quartier,
          "profilePic": "assets/imgs/location_feed_02.png"
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params)
   return params;
    
  }

}
