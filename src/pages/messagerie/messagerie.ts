import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { ChatbodyPage } from '../chatbody/chatbody';
import { AuthProvider } from '../../providers/auth/auth';
import { ChatProvider } from '../../providers/chat/chat';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
/**
 * Generated class for the MessageriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messagerie',
  templateUrl: 'messagerie.html',
})
export class MessageriePage {

  Friends = []
  allUsers = []
  Conversations = []


 constructor( public chatProvider: ChatProvider, public authProvider: AuthProvider, public ngZone: NgZone, public events: Events,  public navCtrl: NavController, public navParams: NavParams) {
   
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

   this.events.subscribe('Conversations', () =>{
     this.ngZone.run(() =>{
       this.Conversations = this.chatProvider.Conversations
       this.allUsers = this.chatProvider.buddyUsers.reverse()

       for (var key in this.Conversations){
         var d = new Date(this.Conversations[key].Time)

         var years = d.getFullYear()
         var month = 1 + d.getMonth()
         var days =  d.getDate()
         var hours = d.getHours()
         var minutes = '0' + d.getMinutes()

         var messageTime1 = years + '/' + month + '/' + days
         var messageTime2 = years + '/' + month
         var messageTime3 = years

         if(messageTime1 == todayRes1){
           this.Conversations[key].Time = hours + ":" + minutes.substr(-2)
         }else{
            if(messageTime2 == todayRes2){
               var DN = toDays + days
               if(DN = 1){
                 this.Conversations[key].Time = 'Yesterday , ' + hours + ":" + minutes.substr(-2)
               }else if(DN < 7){
                 this.Conversations[key].Time = days[DN] + hours + ":" + minutes.substr(-2)
               }else{
                 this.Conversations[key].Time = months[month] + ',' + days
               }
            }else{
              if(todayRes3 == messageTime3){
               this.Conversations[key].Time = months[month] + "," + days
              }else{
               this.Conversations[key].Time = months[month] + "," + days + ',' + years
              }
              
            }
         }

       }

     })
   })


 }


 
 ionViewDidLeave(){
   this.events.subscribe('Conversations')
 }
 


 ionViewDidEnter(){
   //this.chatProvider.getConversations()
 }

 openChatBody(userDetails){
  /* this.chatProvider.initialize(userDetails)
   this.navCtrl.push(ChatbodyPage, {
     Details: userDetails
   });*/
 }

}
