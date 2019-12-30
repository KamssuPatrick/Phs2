import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, Events, AlertController, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { ChatProvider } from '../../providers/chat/chat';
import { Clipboard } from '@ionic-native/clipboard';

 

declare var window: any;

@Component({
  selector: 'page-chatbody',
  templateUrl: 'chatbody.html',
})
export class ChatbodyPage {

  userDetails;

  details = '';

  detailsA = {};

  myDetails = {};
  key = []

  onlineStatus = 'Online';
  offlineStatus = 'Offline';


  newMessage = {
    body: ''

  }

  allMessages = [];

  @ViewChild('content') content: Content

  constructor(private clipboard: Clipboard, public alertCtrl: AlertController, public afDB: AngularFireDatabase, public chatProvider: ChatProvider, public ngZone: NgZone, public events: Events, public actionSheetController: ActionSheetController, private platform: Platform, public loadCtrl: LoadingController, public authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams,) {
    this.userDetails = this.navParams.get('Details')

    var days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

   var today = new Date
   var toYear = today.getFullYear()
   var toMonth = 1 + today.getMonth()
   var toDays =  today.getDate()
   var toHours = today.getHours()
   var toMinutes = '0' + today.getMinutes()

   var todayRes1 = toYear + '/' + toMonth + '/' + toDays
   var todayRes2 = toYear + '/' + toMonth
   var todayRes3 = toYear
    
    console.log("userDetails",this.userDetails);

    this.events.subscribe('myDetails', ()=>{
      this.ngZone.run(()=>{
        this.myDetails = this.authProvider.myDetails;
        console.log("myDetails",this.myDetails);
      })
    })

    this.events.subscribe('messages', ()=>{
      this.ngZone.run(()=>{
        this.allMessages = this.chatProvider.allMessages;

        for (var key in this.allMessages){

          var d = new Date(this.allMessages[key].Time)
 
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
 
 
        }
      })
    })


    if(this.allMessages.length > 6){
      setTimeout(()=>{
        for(let i=0; i<10; i++){
          this.allMessages[i];
        }
      }, 300)
    }

  }

  showToast(message){
    this.platform.ready().then(() => {
      window.plugins.toast.show(message, "short", 'bottom');
  })
  }

  callFunction(){
    this.content.scrollToBottom(0);
  }
  

  ionViewWillEnter(){}

  ionViewDidLeave(){
    this.events.subscribe('myDetails');
    this.events.subscribe('messages');
  }

  ionViewDidEnter(){
    //this.authProvider.getAdminDetails();
    this.authProvider.getMyDetails();
    //this.chatProvider.getMessages(this.userDetails);
  }



  sendMessage(){
    var res = this.newMessage.body;
    var res1 = res.trim();
    /*
      if(res1 == ''){
          console.log("Can't send empty message");
          this.newMessage.body = '';
      } else{
          this.chatProvider.sendMessage(this.newMessage).then(()=>{
            this.newMessage.body = '';
          }).catch((err)=>{
            console.log(err);
          })
      }*/

  }

  showMessageConfirm(message, myDetails, friendDetails){

    const confirm = this.alertCtrl.create({
      title: 'Message',
      message: "Tap On Option",
      buttons: [
        {
          text: 'Copy Message',
          handler: data => {
          this.copyMessage(message)
          }
        },
        {
          text: 'Delete For Me',
          handler: data => {
          this.deleteMessageforMe(message, myDetails, friendDetails) 
          }
        },
        {
          text: 'Delete For All',
          handler: data => {
          this.deleteMessageforAll(message, myDetails, friendDetails) 
          }
        },
        {
          text: 'Cancel',
          handler: data => {
          this.showToast('Cancel')
          }
        }
      ]
    });
    confirm.present();

  }


  copyMessage(message){
    this.clipboard.copy(message.Body).then(()=>{
      this.showToast('Message copied to clipboard')
    })
  }

  deleteMessageforMe(message, myDetails, friendDetails){
    /*this.chatProvider.deleteMessageforMe(message, myDetails, friendDetails).then(()=>{
      console.log('message has been deleted')
    }).catch((err)=>{
      console.log(err)
    })*/
  }

  deleteMessageforAll(message, myDetails, friendDetails){
   /* this.chatProvider.deleteMessageforAll(message, myDetails, friendDetails).then(()=>{
      console.log('message has been deleted')
    }).catch((err)=>{
      console.log(err)
    })*/
  }


}
