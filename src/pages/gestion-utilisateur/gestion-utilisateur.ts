import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController, Note } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { UtilisateurPage } from '../utilisateur/utilisateur';
import { NoteGerant } from '../../models/note2/noteGerant.model';
import { NoteListService } from '../../services/note-list.service';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the GestionUtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestion-utilisateur',
  templateUrl: 'gestion-utilisateur.html',
})
export class GestionUtilisateurPage {

  @Input() data: any;
  value : any;
  params: any = {};
  buttonsColor: string = '';
  ref:any;
  value2 : any;
  //onBloquer = this.setNext;
    text = 'Bloquer';

    

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public afData: AngularFireDatabase,
    private noteListService: NoteListService) {

    this.value = navParams.get('item');
    /*this.ref= firebase.database().ref("users/"+ this.value);

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
  };*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionUtilisateurPage');
  }

 

  onSupprimer(item)
  {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment supprimer le compte de ' + item + ' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            console.log('Buy clicked');

              /*let index = this.data.items.indexOf(item);
              if (index > -1) {
              this.data.items.splice(index, 1);
  }*/
          }
        }
      ]
    });
    alert.present();
  }

  /*setNext(){
    
    if(this.buttonsColor === '') {
      this.buttonsColor = '#e9868b';
      this.text = 'Debloquer';
    }

    else
    {
      this.buttonsColor = '';
      this.text = 'Bloquer';
    }
    //this.onBloquer = this.goToNext;
    
  }*/

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
          "avatar":"../assets/img/avatar/user1.png"
        };
       
       
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  Modifier(noteGerant: NoteGerant){
    
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment effectuer cette modification ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Modifier',
          handler: () => {
  
            this.noteListService.updateNoteGerant(noteGerant).then(() => {
            this.navCtrl.setRoot(UtilisateurPage);
            });
  
            
  
          }
        }
      ]
    });
    alert.present();

  
  }
}
