import { NavController, Events, NavParams, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { ModifcationProduitPage } from '../modifcation-produit/modifcation-produit';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { ChatProvider } from '../../providers/chat/chat';
import { AuthService } from '../../services/auth.service';
import { Component, NgZone, ViewChild } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {

  params: any = {};
  ref: any;
  refs: any;
  value:any;
  types: any;
  type : any;
  newVal
  
  allFav = [];
  
  userId: any;

  constructor(public authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public ngZone: NgZone, public events: Events,
    public alertController: AlertController, public chatProvider: ChatProvider,
    public auth: AuthService, public afData: AngularFireDatabase, ) {

    this.value = navParams.get('pat');
    
    console.log("isisssssss", this.value);

    this.newVal = this.value;

    this.presentLoading(this.newVal);

    this.userId = firebase.auth().currentUser.uid;
    console.log("id", this.userId);

    this.initializeJSONData();
    

    // this.events.subscribe('favoris', ()=>{
    //   this.ngZone.run(()=>{
    //     this.allFav = this.authProvider.allFav;
    //     console.log("fav", this.allFav);
    //   })
    // })
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }

  getAllUsers(values){ 
    if(values == 0)
    {
      this.types = "Villa";
      this.type = "villa";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
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
            let nn= firebase.database().ref(`files/villa/profile/${data.val().profilePic}`);
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
                  "image": link,
                  "index": values,
                  "url": data.val().url,
                  "wifi": data.val().wifi,
                  "ascenseur": data.val().ascenseur,
                  "camera": data.val().camera,
                  "climatiseur": data.val().climatiseur,
                  "gardien": data.val().gardien,
                  "groupeE": data.val().groupeE,
                  "jacuzzi": data.val().jacuzzi,
                  "typeAppartement": data.val().typeAppartement
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

    if(values == 1)
    {
      this.types = "Appartement";
      this.type = "appartement";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/appt_non_meuble/profile/${data.val().profilePic}`);
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
                "image": link,
                "index": values,
                "url": data.val().url,
                "wifi": data.val().wifi,
                "ascenseur": data.val().ascenseur,
                "camera": data.val().camera,
                "climatiseur": data.val().climatiseur,
                "gardien": data.val().gardien,
                "groupeE": data.val().groupeE,
                "jacuzzi": data.val().jacuzzi,
                "typeAppartement": data.val().typeAppartement
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;

    }

    /*if(values == 2)
    {
      this.types = "Appartement meublé";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
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
          let nn= firebase.database().ref(`files/appt_meuble/profile/${data.val().profilePic}`);
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
                "image": link,
                "index": values
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
        
       
      });

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;
    }*/

    if(values == 2)
    {
      this.types = "Immeuble";
      this.type = "immeuble";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
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
          let nn= firebase.database().ref(`files/immeuble/profile/${data.val().profilePic}`);
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
                "image": link,
                "index": values,
                "url": data.val().url,
                "wifi": data.val().wifi,
                "ascenseur": data.val().ascenseur,
                "camera": data.val().camera,
                "climatiseur": data.val().climatiseur,
                "gardien": data.val().gardien,
                "groupeE": data.val().groupeE,
                "jacuzzi": data.val().jacuzzi,
                "typeAppartement": data.val().typeAppartement
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
        
       
      });

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;

    }

    if(values == 3)
    {
      this.types = "Bureau";
      this.type = "bureau";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
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
                "image": link,
                "index": values,
                "url": data.val().url,
                "wifi": data.val().wifi,
                "ascenseur": data.val().ascenseur,
                "camera": data.val().camera,
                "climatiseur": data.val().climatiseur,
                "gardien": data.val().gardien,
                "groupeE": data.val().groupeE,
                "jacuzzi": data.val().jacuzzi,
                "typeAppartement": data.val().typeAppartement
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

     // this.readFavoris(this.userId);

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;
    }

    if(values == 4)
    {
      this.types = "Magasin";
      this.type = "magasin";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/magasin/profile/${data.val().profilePic}`);
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
                "image": link,
                "index": values,
                "url": data.val().url,
                "wifi": data.val().wifi,
                "ascenseur": data.val().ascenseur,
                "camera": data.val().camera,
                "climatiseur": data.val().climatiseur,
                "gardien": data.val().gardien,
                "groupeE": data.val().groupeE,
                "jacuzzi": data.val().jacuzzi,
                "typeAppartement": data.val().typeAppartement
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;
    }

    if(values == 5)
    {
      this.types = "Bail";
      this.type = "bail";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/bail/profile/${data.val().profilePic}`);
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
                "image": link,
                "index": values,
                "url": data.val().url,
                "wifi": data.val().wifi,
                "ascenseur": data.val().ascenseur,
                "camera": data.val().camera,
                "climatiseur": data.val().climatiseur,
                "gardien": data.val().gardien,
                "groupeE": data.val().groupeE,
                "jacuzzi": data.val().jacuzzi,
                "typeAppartement": data.val().typeAppartement,
                "jardin" : data.val().jardin,
                "ville" : data.val().ville,
                "quartier" : data.val().quartier
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo"+ this.value,params)
	   return params;

    }

       

    
    	



		
		
    }
    
    async presentLoading(values) {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });

      if(values == 0)
      {
         this.ref =  await firebase.database().ref("services/villa");
        this.type = "villa";
        if(this.ref === 'null')
        {
          this.presentAlert();
        }
      }

      if(values == 1)
      {
        this.ref = await firebase.database().ref("services/appt_non_meuble");
        this.type = "appt_non_meuble";
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      /*if(values == 2)
      {
        this.ref = await firebase.database().ref("services/appt_meuble");
        this.type = "appt_meuble";
        if(this.ref === 'null')
        {
          this.presentAlert();
        }
      }*/

      if(values == 2)
      {
        this.ref = await firebase.database().ref("services/immeuble");
        this.type = "immeuble";
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 3)
      {
        this.ref = await firebase.database().ref("services/bureau");
        this.type = "bureau";
       

   // console.log("hellllloooooooooooss",this.refs)
        if(this.ref == null)
        {
          this.presentAlert();
        }

        
      }

      if(values == 4)
      {
        this.ref = await firebase.database().ref("services/magasin");
        this.type = "magasin";
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 5)
      {
        this.ref = await firebase.database().ref("services/bail");
        this.type = "bail";
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      
    this.params.data = this.getAllUsers(values);
    loader.present();

    }

    async presentAlert() {
      const alert = await this.alertController.create({
        title: 'Pas de données',
        message: 'Aucune donnée n\'a été enregistrée',
        buttons: ['OK']
      });

      //this.navCtrl.push(Tabs1Page);
  
      await alert.present();
    }

     
    
    
      //this.params.data = this.getAllFav();
    


      ionViewDidLeave(){
        this.events.subscribe('favoris')
      }
    
      ionViewDidEnter(){
        this.authProvider.getFavoris(this.userId, this.type);
        this.authProvider.getTypes(this.type);
      }

    // getAllFav(){ 
    //   let params={"items2":[]};
    //   let items=[];
    //   this.ref.on('value', function(snapshot) {
    //     let i=0;
        
    //     let keyyy=[];
        
    //     keyyy= Object.keys(snapshot.val());
    //     snapshot.forEach(function(data){
    //       console.log(i);
    //       params.items2[i]={
    //         "Id": keyyy[i],
    //         "Time": data.val().Time
    //       };
    //       i++;
    //     });
        
       
    //   });
    //   console.log("hell",params)
    //  return params;
      
    // }

    FilterJSONData(ev: any)
    {
      this.initializeJSONData();
      const val = ev.target.value;

      if(val && val.trim() != '')
      {
        
      }
    }

    initializeJSONData()
    {
      this.ref = firebase.database().ref("services/villa");
      this.params.data = this.getAllUsers(0);

      console.log("helqdsqsdqsl ",this.params.data.items)

    }

    }
