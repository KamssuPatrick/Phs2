import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataProvider } from '../../providers/data-service/data';
import { Observable } from 'rxjs';
import { ImmeublePage } from '../immeuble/immeuble';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import * as firebase from 'firebase/app';
/**
 * Generated class for the AjoutLogisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-logis',
  templateUrl: 'ajout-logis.html',
})
export class AjoutLogisPage {

   
  files: Observable<any[]>;
  files1: any;
  myphoto:any;

  orderBy
  imageURI:any;
  imageFileName:any;
  
  
  nomLogis: string;
  nbreChambre
  nbreDouche
  nbreCuisine
  myImages: Array<string>;
  value : any;
  autre
  nbreSalon
  etage
  nomLocataire
  prenomLocataire
  telephoneLocataire
  uid: any;
  loyer

  constructor(private dataProvider: DataProvider, public navCtrl: NavController, 
    private camera: Camera, public navParams: NavParams,
     public afData: AngularFireDatabase, private alertCtrl: AlertController, 
     private toastCtrl: ToastController) {

      
      this.uid = this.navParams.get("uid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutLogisPage');
  }

  Ajout(uid)
  {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Créer ce Logis ?',
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
    
             
              
              //let upload= this.dataProvider.uploadToStorage(this.myphoto, "Logis");
              
              //upload.then().then(res => {
                //console.log("this.dataProvider.url", this.dataProvider.url);
                
                
               // this.dataProvider.storeInfoToDatabase(res.metadata,"Logis","profile").then(data => {
                  this.afData.database.ref("Immeubles").child(uid).child("Locataires").push({nomLocataire: this.nomLocataire, prenomLocataire: this.prenomLocataire,
                     telephoneLocataire: this.telephoneLocataire, 
                    nbreChambre: this.nbreChambre, 
                    nbreDouche: this.nbreDouche, nbreCuisine: this.nbreCuisine, nbreSalon: this.nbreSalon,
                    autre: this.autre, etage: this.etage, Time: firebase.database.ServerValue.TIMESTAMP, loyer: this.loyer});
                    
                  

                  
                   let toast= this.toastCtrl.create({
                     message: "Ajout effectué avec succès...",
                     duration:5000
                   })
                  // console.log(data);
                   toast.present();
               // });
                this.navCtrl.pop();
              //});
    
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
