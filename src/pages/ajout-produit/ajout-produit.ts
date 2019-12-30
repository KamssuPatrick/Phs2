import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import { ImmeublePage } from '../immeuble/immeuble';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { DataProvider } from '../../providers/data-service/data';


/**
 * Generated class for the AjoutProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-produit',
  templateUrl: 'ajout-produit.html',
})
export class AjoutProduitPage {


  
  files: Observable<any[]>;
  files1: any;
  myphoto:any;

  orderBy
  imageURI:any;
  imageFileName:any;  
  avis: string;
  surface: string;
  etage
  salon
  toilette
  cuisine
  chambre
  parking
  terrasse
  autre
  prix
  url
  typeL
  typeAppartement
  cameras
  gardien
  groupeE
  ascenseur
  climatiseur
  wifi
  jac
  myImages: Array<string>;
  value : any;
  jardin
  ville
  quartier
  
  constructor( private dataProvider: DataProvider, public navCtrl: NavController, 
    private camera: Camera, public navParams: NavParams,
     public afData: AngularFireDatabase, private alertCtrl: AlertController, 
     private toastCtrl: ToastController ) {
    

      this.value = navParams.get('item');
      
     // this.files = this.dataProvider.getFiles();
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutProduitPage');
  }

  Ajout(){

    if(this.value == "Villa")
    {
     
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?' + this.typeL,
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
              
              //console.log("/"+this.typeAppartement+"/"+this.cameras+"/"+this.gardien+"/"+this.groupeE+"/"+this.ascenseur+"/"+
              //this.climatiseur+"/"+ this.wifi+ "/"+ this.jac);
               let upload= this.dataProvider.uploadToStorage(this.myphoto, "villa");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"villa","profile").then(data => {
                  this.afData.list("/services/villa").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                  salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                  terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                  ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                  , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                quartier: this.quartier});
                   
                  
                  //this.navCtrl.setRoot(VillaPage);

                   
                   /*let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })
                   console.log(data);*/
                });
                
              });
              
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "AppartsNM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "appt_non_meuble");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"appt_non_meuble","profile").then(data => {
                  this.afData.list("/services/appt_non_meuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                  this.navCtrl.setRoot(AppartementNmPage);

                  /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
              
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "AppartsM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "appt_meuble");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"appt_meuble","profile").then(data => {
                  this.afData.list("/services/appt_meuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                  //this.navCtrl.setRoot(AppartementMPage);

                  /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
              }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Immeuble")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
             
              
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "immeuble");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"immeuble","profile").then(data => {
                  this.afData.list("/services/immeuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                  this.navCtrl.setRoot(ImmeublePage);

                  /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Bureau")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "bureau");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"bureau","profile").then(data => {
                  this.afData.list("/services/bureau").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                 // this.navCtrl.setRoot(BureauPage);

                  /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Magasin")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
               
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "magasin");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"magasin","profile").then(data => {
                  this.afData.list("/services/magasin").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                 // this.navCtrl.setRoot(MagasinPage);

                  /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Bail")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              
              let upload= this.dataProvider.uploadToStorage(this.myphoto, "bail");
              
              upload.then().then(res => {
                console.log("this.dataProvider.url", this.dataProvider.url);
                
                
                this.dataProvider.storeInfoToDatabase(res.metadata,"bail","profile").then(data => {
                  this.afData.list("/services/bail").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                    salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
                    terrasse: this.terrasse, typeAppartement: this.typeAppartement, camera: this.cameras, gardien: this.gardien, groupeE: this.groupeE, 
                    ascenseur: this.ascenseur, climatiseur: this.climatiseur, wifi: this.wifi, jacuzzi: this.jac
                    , autre: this.autre, prix: this.prix, url: this.url, type: this.typeL, profilePic:data.key, jardin:this.jardin, ville: this.ville,
                    quartier: this.quartier});
                    
                 // this.navCtrl.setRoot(BailPage);

                 /*  
                   let toast= this.toastCtrl.create({
                     message: data.toString(),
                     duration:5000
                   })*/
                   console.log(data);
                });
                
              });
    
            }
          }
        ]
      });
      alert.present();
    }

  
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
