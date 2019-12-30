import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataProvider } from '../../providers/data-service/data';
import { Observable } from 'rxjs';
import { ImmeublePage } from '../immeuble/immeuble';

/**
 * Generated class for the AjoutImmmeublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-immmeuble',
  templateUrl: 'ajout-immmeuble.html',
})
export class AjoutImmmeublePage {

  
  
  files: Observable<any[]>;
  files1: any;
  myphoto:any;

  orderBy
  imageURI:any;
  imageFileName:any;
  
  
  nomImmeuble: string;
  nbreEtage
  nbreChambre
  nbreAppart
  nbreStudio
  myImages: Array<string>;
  value : any;
  autre
  ville
  quartier

  constructor(private dataProvider: DataProvider, public navCtrl: NavController, 
    private camera: Camera, public navParams: NavParams,
     public afData: AngularFireDatabase, private alertCtrl: AlertController, 
     private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutImmmeublePage');
  }

  Ajout()
  {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Créer cet Immeuble ?',
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
    
             
              
             // let upload= this.dataProvider.uploadToStorage(this.myphoto, "Immeuble");
              
             // upload.then().then(res => {
                //console.log("this.dataProvider.url", this.dataProvider.url);
                
                
              //  this.dataProvider.storeInfoToDatabase(res.metadata,"Immeuble","profile").then(data => {
                  this.afData.list("/Immeubles").push({nomImmeuble: this.nomImmeuble, nbreEtage: this.nbreEtage, 
                    nbreChambre: this.nbreChambre, nbreAppart: this.nbreAppart, nbreStudio: this.nbreStudio,
                    autre: this.autre, ville: this.ville,
                    quartier: this.quartier});
                    
                  this.navCtrl.pop();

                  
                   let toast= this.toastCtrl.create({
                     message: "Ajout effectué avec succès...",
                     duration:5000
                   })
                   //console.log(data);
                   toast.present();
               // });
                
           //   });
    
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
