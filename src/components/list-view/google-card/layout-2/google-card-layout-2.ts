import { Component, NgZone, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, Events, NavController, AlertController } from 'ionic-angular';
import { ProduitDetailsPage } from '../../../../pages/produit-details/produit-details';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatProvider } from '../../../../providers/chat/chat';
import { AuthService } from '../../../../services/auth.service';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
    selector: 'google-card-layout-2',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    slider = {};

    animateItems = [];
    animateClass: any;
    userId: any;

    newMessage = {
      body: ''
    }

    sampleArr = [];
    resultArr  = [];

    public allFav: any[];
    public allFavType: any[];

    searchTerm: any = "";
  allItems: any;
  type: any;

    constructor(public authProvider: AuthProvider, public navCtrl: NavController, public afData: AngularFireDatabase,
      public alertCtrl: AlertController, public chatProvider: ChatProvider,
     public auth: AuthService, public afDB: AngularFireDatabase, public ngZone: NgZone, public evente: Events ) { 

        this.animateClass = { 'fade-in-left-item': true };

        this.userId = firebase.auth().currentUser.uid;

        this.evente.subscribe('favoris', ()=>{
          this.ngZone.run(()=>{
            this.allFav = this.authProvider.allFav;
            console.log("fav", this.allFav);
          })
        })

        this.evente.subscribe('typesElement', ()=>{
          this.ngZone.run(()=>{
            this.allFavType = this.authProvider.allFavType;
            console.log("typesElement", this.allFavType);
          })
        })
        console.log("allFav dddd", this.data.params);
    }

  

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }


    onEvent(event: string, item: any) {

      console.log("qqqq", event);
      console.log("itemmm", item);
      
        if ('onTextChange' === event) {
          this.getItems(item);
          this.events[event](this.searchTerm);
        } else {
          this.events[event](item);
        }
      
      console.log(event);



        
    }

    detail( id: any, image: any, index: any)
    {
        this.navCtrl.push(ProduitDetailsPage, { item:id, image:image, index: index});
    }

    share(id, card, index) {
       // this.navCtrl.push(Tabs3Page, {id:id, img:card, index: index, }); 
        this.newMessage.body = card;
        this.sendMessageA()
        console.log("lien", card)
      
  }

  sendMessageA(){
    var res = this.newMessage.body;
    var res1 = res.trim();
    /*
      if(res1 == ''){
          console.log("Can't send empty message");
          this.newMessage.body = '';
      } else{
          this.chatProvider.sendMessageA(this.newMessage).then(()=>{
            this.newMessage.body = '';
          }).catch((err)=>{
            console.log(err);
          })
      }*/

  }

    Addfavoris(item: any,  index: any, tout: any, image: any) {

      if(index == 0)
      {
        
        this.PutFavoris(this.userId, 'villa', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'villa';
      }

      if(index == 1)
      {
        
        this.PutFavoris(this.userId, 'appartement', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'appartement';
      }

      if(index == 2)
      {
        
        this.PutFavoris(this.userId, 'immeuble', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'immeuble';
      }

      if(index == 3)
      {
        
        this.PutFavoris(this.userId, 'bureau', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'bureau';
      }

      if(index == 4)
      {
        
        this.PutFavoris(this.userId, 'magasin', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'magasin';
      }

      if(index == 5)
      {
        
        this.PutFavoris(this.userId, 'bail', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'bail';
      }

      
      }

      Delfavoris(item: any,  index: any) {

        if(index == 0)
        {
          
         this.DelFav(this.userId, 'villa', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'villa';
        }
  
        if(index == 1)
        {
          
          this.DelFav(this.userId, 'appartement', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'appartement';
        }
  
        if(index == 2)
        {
          
         this.DelFav(this.userId, 'immeuble', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'immeuble';
        }
  
        if(index == 3)
        {
          
          this.DelFav(this.userId, 'bureau', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'bureau';
        }
  
        if(index == 4)
        {
          
          this.DelFav(this.userId, 'magasin', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'magasin';
        }
  
        if(index == 5)
        {
          
          this.DelFav(this.userId, 'bail', item);
          console.log("ciis" + item + " "+ index);
          this.type = 'bail';
        }
  
        
        }
    

      PutFavoris(userId, type, item, tout, image){
        this.afData.database.ref('Favoris').child(userId).child(type).push({
          Id: item,
          autre: tout.autre,
          avis: tout.avis,
          chambre: tout.chambre,
          cuisine: tout.cuisine,
          etage: tout.etage,
          parking: tout.parking,
          prix: tout.prix,
          profilePic: image,
          salon: tout.salon,
          surface: tout.surface,
          terrasse: tout.terrasse,
          toilette: tout.toilette
        }).then((snap)=>{
          var key = snap.key;
          this.afData.database.ref('Favoris').child(userId).child(type).child(key).update({
            Key: key,
          type: type}).then(()=>{
              console.log("ajout correct.")
          });
      });
      }

      DelFav(userId, type, item){

        console.log("Remove succeeded." + userId + "///" + type + " //// "+ item)

        this.afData.database.ref('Favoris').child(userId).child(type).child(item).remove().then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
      }

      ionViewDidLeave(){
        this.events.subscribe('favoris')
        this.events.subscribe('messages')
      }
    
      ionViewDidEnter(){
        //this.chatProvider.getMessagesA()
      }

      onVisite(){
        //this.navCtrl.push(IFramePage);

      }

      find(x,y){
        
        var found= x.find(function(element){
          return element.Id==y;
        });
        
        //console.log("xxxxxxxxx",x);
        //console.log("yyyyyyyyyy",y);
        if(found){
          //console.log("found",found);
          return true;
        }
        else{
          // console.log("found2",found);
          return false;
        }

      }

      search(event)
      {
        let serachKey : string = event.target.value;
        let firstLetter = serachKey.toUpperCase();
         
      }

      getItems(event: any): void {
        if (!this.allItems) {
          this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter((item) => {
          return item.title.indexOf(this.searchTerm.toLowerCase()) > -1;
        });
      }

     
}
