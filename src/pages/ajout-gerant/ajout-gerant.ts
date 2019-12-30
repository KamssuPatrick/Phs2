import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data-service/data';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';
import { UtilisateurPage } from '../utilisateur/utilisateur';
import { Observable } from 'rxjs';
import { ListeImmeublePage } from '../liste-immeuble/liste-immeuble';

/**
 * Generated class for the AjoutGerantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-gerant',
  templateUrl: 'ajout-gerant.html',
})
export class AjoutGerantPage {
 
  
  files: Observable<any[]>;
  files1: any;
  myphoto:any;

  orderBy
  imageURI:any;
  imageFileName:any;
  
  
  nomGerant: string;
  prenomGerant
  telephone
  myImages: Array<string>;
  value : any;
  uid: any;

  constructor(private dataProvider: DataProvider, public navCtrl: NavController, 
    private camera: Camera, public navParams: NavParams,
     public afData: AngularFireDatabase, private alertCtrl: AlertController, 
     private toastCtrl: ToastController) {
     
      this.uid = this.navParams.get("uid");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutGerantPage');
  }
  Ajout(uid)
  {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Créer ce gérant ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Ajouter',
            handler: () => {

    
             
              
              //let upload= this.dataProvider.uploadToStorage(this.myphoto, "Gerant");
              
              
      
                
                  this.afData.database.ref("Immeubles").child(uid).child("Gerant").set({nomGerant: this.nomGerant, prenomGerant: this.prenomGerant, 
                    telephone: this.telephone}).catch(error => {
                      console.error('Error getting token', error);

                      let toast= this.toastCtrl.create({
                        message: error,
                        duration:5000
                      })

                      
                   toast.present();

                    });

                    let toast= this.toastCtrl.create({
                      message: "Enregistrement réussi... ",
                      duration:5000
                    })
  
                    
                 toast.present();
                    
            
                   this.navCtrl.pop();
                 
                  
                
    
            }
          }
        ]
      });
      alert.present();
    
  }

  
  changeListener($event) : void {
    this.files1 = $event.target.files[0];
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log("hellaaaaaaaaaaaaaa");
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      const toast = this.toastCtrl.create({
        message:this.myphoto ,
        duration: 5000
      });
      toast.present();
      //console.log(this.myphoto);
     
    }, (err) => {
      // Handle error
    });
  }

  

}