import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController, App } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Note2 } from '../../models/note2/note2.model';
import { NoteListService } from '../../services/note-list.service';
import { NOMEM } from 'dns';

/**
 * Generated class for the ModificationProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modification-profil',
  templateUrl: 'modification-profil.html',
})
export class ModificationProfilPage {

  @Input() data: any;
  value : any;
  params: any = {};
  buttonsColor: string = '';
  ref:any;
  value2 : any;
    text = 'Bloquer';
    user: any;
    userId: any;
    profession
    societe
    telephone
    email
    username
    prenom

    value3: Note2 = {
      username: '',
      prenom: '',
      email: '',
      profession: '',
      societe: '',
      telephone: ''
    };

    constructor(
      public afDatabase: AngularFireDatabase,
      public afAuth: AngularFireAuth, 
      public navCtrl: NavController,
      public navParams: NavParams, 
      public app: App,
      public auth: AuthService,
      private fireAuth: AngularFireAuth,
      public alertCtrl: AlertController,
      private noteListService: NoteListService,
      public afData: AngularFireDatabase) {

    
    this.value = navParams.get('item');
    this.ref= firebase.database().ref("users/"+ this.value);

    
    this.user = firebase.auth().currentUser;

    this.userId = firebase.auth().currentUser.uid;

    this.params.data = this.getAllUsers();
    this.value2=this.params.data;
    console.log("jkkjdkfjkdjfdfh",this.value2);
     

    this.params.events = {
      'onButtonClick': function (item: any) {
          console.log("Follow");
      },
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      }
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificationProfilPage');
  }


  ngOnInit() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          isAnonymous: user.isAnonymous,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken
        }
        
        

        console.log("les donneesss", user.photoURL);
      }
      else {
        //this.router.navigate(["/home"]);
        console.log("pas de données");
      }
    })
  }


  getAllUsers(){ 
    let params={};
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      let keyyy=[];
      
      
      
        console.log(snapshot.val());
        params={
          "username": snapshot.val().username,
          "prenom": snapshot.val().prenom,
          "email":snapshot.val().email,
          "profession": snapshot.val().profession,
          "societe": snapshot.val().societe,
          "telephone": snapshot.val().telephone,
          "avatar":"assets/img/avatar/user1.png"
        };
       
        this.email = this.params.data.email;
        this.username = this.params.username;
        this.prenom = this.params.prenom;
       
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  updateNote(note: Note2) {

   
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment effectuer cette modification ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' );
            }
          },
          {
            text: 'Modifier',
            handler: () => {
    
              
              this.auth.writeUserData2(this.userId, this.profession, this.societe, this.telephone);
              //this.navCtrl.setRoot(Tabs5Page);
              
              
    
            }
          }
        ]
      });
      alert.present();
    }
  

}
