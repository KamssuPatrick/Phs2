import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Events } from 'ionic-angular';

import * as firebase from 'Firebase';



@Injectable()
export class ChatProvider {

  //UserUid = window.localStorage.getItem('userid');
  //UserUid = firebase.auth().currentUser.uid;

  userDetails;
  userkey;

  allMessages = [];
  Conversations = []
  buddyUsers = []
  key = []
  

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public events: Events) {
    //console.log(this.UserUid)
  }
  /*

  initialize(user){
    this.userDetails = user;
    console.log("userDetails",this.userDetails)
  }

  getMessages(userDetails){
    this.afDB.database.ref('Chat').child(this.UserUid).child(userDetails.id).on('value', snap =>{
      this.allMessages = [];
      var res = snap.val();
      for(var i in res){
        this.allMessages.push(res[i]);
      }
 
      this.events.publish('messages');
    });
  }

  getMessagesA(){
    this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').on('value', snap =>{
      this.allMessages = [];
      var res = snap.val();
      for(var i in res){
        this.allMessages.push(res[i]);
      }
      console.log(this.allMessages);
      this.events.publish('messages');
    });
  }



  sendMessage(messageDetails){
    var promise = new Promise((resolve, reject) =>{
      this.afDB.database.ref('Chat').child(this.UserUid).child(this.userDetails.id).push({
          Body: messageDetails.body,
          Id: this.UserUid,
          Time: firebase.database.ServerValue.TIMESTAMP   
      }).then((snap)=>{
        var key = snap.key;
          this.afDB.database.ref('Chat').child(this.userDetails.id).child(this.UserUid).child(key).set({
              Body: messageDetails.body,
              Id: this.UserUid,
              Time: firebase.database.ServerValue.TIMESTAMP ,
              Key: key
          }).then(()=>{
              this.afDB.database.ref('Chat').child(this.UserUid).child(this.userDetails.id).child(key).update({
                  Key: key
              }).then(()=>{
                  
                
                this.afDB.database.ref('Conversations').child(this.UserUid).orderByChild('Id').equalTo(this.userDetails.id).once('value', snapshot =>{
                  var res = snapshot.val()


                  if(res != null){
                    var store = Object.keys(res)
                    this.afDB.database.ref('Conversations').child(this.UserUid).child(store[0]).remove().then(()=>{
                      this.afDB.database.ref('Conversations').child(this.UserUid).push({
                        Id: this.userDetails.id,
                        Body: messageDetails.body,
                        Time: firebase.database.ServerValue.TIMESTAMP
                      }).then(()=>{
                        this.afDB.database.ref('Conversations').child(this.userDetails.id).orderByChild('Id').equalTo(this.UserUid).once('value', snapshot =>{
                          var res = snapshot.val()
                          if(res != null){
                            let store = Object.keys(res)
                            this.afDB.database.ref('Conversations').child(this.userDetails.id).child(store[0]).remove().then(()=>{
                              this.afDB.database.ref('Conversations').child(this.userDetails.id).push({
                                Id: this.UserUid,
                                Body: messageDetails.body,
                                Time: firebase.database.ServerValue.TIMESTAMP
                              }).then(()=>{
                                resolve(true)
                              })
                            }).catch((err)=>{
                              reject(err)
                            })
                          }else{
                            this.afDB.database.ref('Conversations').child(this.userDetails.id).push({
                              Id: this.userDetails.id,
                              Body: messageDetails.body,
                             Time: firebase.database.ServerValue.TIMESTAMP
                            }).then(()=>{
                              resolve(true)
                            })
                          }

                        }).catch((err)=>{
                          reject(err)
                        })
                      })
                      }).catch((err)=>{
                        reject(err)
                      })

                  }else{
                    this.afDB.database.ref('Conversations').child(this.UserUid).push({
                      Id: this.userDetails.id,
                      Body: messageDetails.body,
                      Time: firebase.database.ServerValue.TIMESTAMP
                    }).then(()=>{
                        this.afDB.database.ref('Conversations').child(this.userDetails.id).orderByChild('Id').equalTo(this.userDetails.id).once('value', snap =>{
                          var res = snap.val()

                          if(res != null){
                            let store = Object.keys(res)
                            this.afDB.database.ref('Conversations').child(this.userDetails.id).child(store[0]).remove().then(()=>{
                              this.afDB.database.ref('Conversations').child(this.userDetails.id).push({
                                Id: this.UserUid,
                                Body: messageDetails.body,
                                Time: firebase.database.ServerValue.TIMESTAMP
                              }).then(()=>{
                                resolve(true)
                              })
                            }).catch((err)=>{
                              reject(err)
                            })
                          }else{
                              this.afDB.database.ref('Conversations').child(this.userDetails.id).push({
                                Id: this.UserUid,
                                Body: messageDetails.body,
                                Time: firebase.database.ServerValue.TIMESTAMP
                              }).then(()=>{
                                resolve(true)
                              })
                          }

                        }).catch((err)=>{
                          reject(err)
                        })
                    })
                  }

                }).catch((err)=>{
                  reject(err)
                })






              }).catch((err)=>{
                reject(err)
              })
          })
        })    
    })


  return promise;
  
}

sendMessageA(messageDetails){
  var promise = new Promise((resolve, reject) =>{
    this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
        Body: messageDetails.body,
        Id: this.UserUid,
        Time: firebase.database.ServerValue.TIMESTAMP   
    }).then((snap)=>{
      var key = snap.key;
        this.afDB.database.ref('Chat').child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(this.UserUid).child(key).set({
            Body: messageDetails.body,
            Id: this.UserUid,
            Time: firebase.database.ServerValue.TIMESTAMP ,
            Key: key
        }).then(()=>{
            this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(key).update({
                Key: key
            }).then(()=>{
                
              this.afDB.database.ref('Conversations').child(this.UserUid).orderByChild('Id').equalTo('QVbwfPEMT6hsoj7aWlytER7V94F2').once('value', snapshot =>{
                var res = snapshot.val()


                if(res != null){
                  var store = Object.keys(res)
                  this.afDB.database.ref('Conversations').child(this.UserUid).child(store[0]).remove().then(()=>{
                    this.afDB.database.ref('Conversations').child(this.UserUid).push({
                      Id: 'QVbwfPEMT6hsoj7aWlytER7V94F2',
                      Body: messageDetails.body,
                      Time: firebase.database.ServerValue.TIMESTAMP
                    }).then(()=>{
                      this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').orderByChild('Id').equalTo(this.UserUid).once('value', snapshot =>{
                        var res = snapshot.val()
                        if(res != null){
                          let store = Object.keys(res)
                          this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(store[0]).remove().then(()=>{
                            this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
                              Id: this.UserUid,
                              Body: messageDetails.body,
                              Time: firebase.database.ServerValue.TIMESTAMP
                            }).then(()=>{
                              resolve(true)
                            })
                          }).catch((err)=>{
                            reject(err)
                          })
                        }else{
                          this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
                            Id: 'QVbwfPEMT6hsoj7aWlytER7V94F2',
                            Body: messageDetails.body,
                           Time: firebase.database.ServerValue.TIMESTAMP
                          }).then(()=>{
                            resolve(true)
                          })
                        }

                      }).catch((err)=>{
                        reject(err)
                      })
                    })
                    }).catch((err)=>{
                      reject(err)
                    })

                }else{
                  this.afDB.database.ref('Conversations').child(this.UserUid).push({
                    Id: 'QVbwfPEMT6hsoj7aWlytER7V94F2',
                    Body: messageDetails.body,
                    Time: firebase.database.ServerValue.TIMESTAMP
                  }).then(()=>{
                      this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').orderByChild('Id').equalTo('QVbwfPEMT6hsoj7aWlytER7V94F2').once('value', snap =>{
                        var res = snap.val()

                        if(res != null){
                          let store = Object.keys(res)
                          this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(store[0]).remove().then(()=>{
                            this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
                              Id: this.UserUid,
                              Body: messageDetails.body,
                              Time: firebase.database.ServerValue.TIMESTAMP
                            }).then(()=>{
                              resolve(true)
                            })
                          }).catch((err)=>{
                            reject(err)
                          })
                        }else{
                            this.afDB.database.ref('Conversations').child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
                              Id: this.UserUid,
                              Body: messageDetails.body,
                              Time: firebase.database.ServerValue.TIMESTAMP
                            }).then(()=>{
                              resolve(true)
                            })
                        }

                      }).catch((err)=>{
                        reject(err)
                      })
                  })
                }

              }).catch((err)=>{
                reject(err)
              })






            }).catch((err)=>{
              reject(err)
            })
        })
      })    
  })


return promise;

}

getConversations(){
  this.afDB.database.ref('Conversations').child(this.UserUid).on('value', snap =>{
    this.Conversations = []
    var res = snap.val()
    let i2=0;
    

    var array1 = []        
    for (var i in res){
      this.Conversations.push(res[i])
      array1.push(res[i].Id)
    }
    
    this.afDB.database.ref('users').on('value', snap =>{
      this.buddyUsers = []
      let key = [];

      key = Object.keys(snap.val());
      var array =  []

      snap.forEach(function(data){
        let params: any ={};
        
        params.email=data.val().email
        params.prenom=data.val().prenom
        params.profession=data.val().profession
        params.societe=data.val().societe
        params.telephone=data.val().telephone
        params.username=data.val().username
        params.id=key[i2]
        array.push(params)
        i2++
        
      });
      

      for(var d in array1){
        for (var c in array){
          if(key[c] === array1[d]){
            this.buddyUsers.push(array[c])
          }
        }
      }

      this.events.publish('Conversations')      

    })

  })
} 


deleteMessageforMe(message, myDetails, friendDetails){
  var promise = new Promise((resolve, reject) =>{
    this.afDB.database.ref('Chat').child(myDetails.id).child(friendDetails.id).child(message.Key).remove().then(()=>{
      resolve(true)
    }).catch((err)=>{
      reject(err)
    })
  })
  return promise
}

deleteMessageforAll(message, myDetails, friendDetails){
  var promise = new Promise((resolve, reject) =>{
    this.afDB.database.ref('Chat').child(myDetails.id).child(friendDetails.id).child(message.Key).remove().then(()=>{
      this.afDB.database.ref('Chat').child(friendDetails.id).child(myDetails.id).child(message.Key).remove().then(()=>{
          resolve(true)
        }).catch((err)=>{
          reject(err)
        })
    }).catch((err)=>{
      reject(err)
    })
  })
  return promise
}




*/
  }






