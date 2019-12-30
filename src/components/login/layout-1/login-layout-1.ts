import { Component, Input } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../../../pages/accueil/accueil';
import { AdminPage } from '../../../pages/admin/admin';
import { AuthService } from '../../../services/auth.service';
import { AppSettings } from '../../../services/app-settings';
import { AngularFireAuth } from 'angularfire2/auth';


import firebase from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';

declare var window: any;

@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})
export class LoginLayout1 {
    @Input() data: any;
    @Input() events: any;

    public email: string;
    public password: string;
    public itemP: any;
    private isEmailValid: boolean = true;
    private isPasswordValid: boolean = true;
    
    private isEmailNoUsed: boolean = true;
    private isBadPassword: boolean = true;
    //private toast: any;

    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    signupError: string;
    codeError: string;
    
    constructor( public auth: AuthService, public navCtrl: NavController, public toastCtrl: ToastController, 
        public fire: AngularFireAuth, public authProvider: AuthProvider) {
        //this.toast=toastCtrl;
     }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            console.log("i m there");
            return;
            //this.navCtrl.push(AccueilPage);
        }
        if(event == "onLogin" && this.validate()){
            let credentials = {
                email: this.email,
                password: this.password
              };
              this.auth.signInWithEmail(credentials).then(
                (user) => {
                    //this.navCtrl.setRoot(TabsPage,{user:  user.user.uid, email: user.user.email});
                    // window.localStorage.setItem('userid', this.authProvider.afAuth.auth.currentUser.uid);

                    console.log("test", user.user.email);
                },
                error => {
                            this.signupError = error.message;
                            this.codeError= error.code;
                            if(this.codeError=="auth/user-not-found" || this.codeError=="auth/wrong-password"){
                                this.isEmailNoUsed= false;

                            }
                            else{
                                this.isEmailNoUsed= true;
                            }/*
                            if(this.codeError=="auth/email-already-in-use"){
                                this.isEmailUsed=false;
                            }
                            else{
                                this.isEmailUsed=true;
                            }*/
                            //console.log(this.codeError);
                            
                }
              );

        }
        if (this.events[event]) {
            this.events[event]({
                'email' : this.email,
                'password' : this.password
            });
        }
        if(event== "onRegister"){
           // this.navCtrl.push(RegisterPage);
        }

        
        if( event == "onAdmin")
        {
            this.navCtrl.setRoot(AdminPage);
        }

        if( event == "onFacebook")
        {
            this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then( (user) =>{ 
                let fullName= user.user.displayName.split(" ");
                let userName= fullName[0];
                let userLastName;
                for(let i = 1; i < fullName.length; i++){
                    if(i==1){
                        userLastName  = fullName[i];
                    }
                    else{
                        userLastName += " " + fullName[i];
                    }
                   
                 }
                
                console.log(userLastName, userName);
                //this.auth.writeUserData(user.user.uid, userName, user.user.email, userLastName, '', '','');
                // window.localStorage.setItem('userid', this.authProvider.afAuth.auth.currentUser.uid);
                this.auth.writeUserData(user.user.uid, userName, user.user.email, userLastName, '', '','', user.user.photoURL);
                console.log(user.user);
                console.log("patrck");
                //this.navCtrl.setRoot(TabsPage,{email:  user.user.email});
                },
                error => {
                    
                    this.signupError = error.message;
                    this.codeError= error.code;
                    console.log(this.codeError);
                    this.presentToast(this.signupError);
            })
        }

        if( event == "onGoogle")
        {
           
            this.auth.signInWithGoogle().then(
                (user) =>{ 
                    let fullName= user.user.displayName.split(" ");
                    let userName= fullName[0];
                    let userLastName;
                    for(let i = 1; i < fullName.length; i++){
                        if(i==1){
                            userLastName  = fullName[i];
                        }
                        else{
                            userLastName += " " + fullName[i];
                        }
                       
                     }
                    
                    console.log(userLastName, userName);
                    //this.auth.writeUserData(user.user.uid, userName, user.user.email, userLastName, '', '', '');
                    // window.localStorage.setItem('userid', this.authProvider.afAuth.auth.currentUser.uid);
                    this.auth.writeUserData(user.user.uid, userName, user.user.email, userLastName, '', '', '', user.user.photoURL);
                    window.localStorage.setItem('userid', this.authProvider.afAuth.auth.currentUser.uid);

                    console.log(user.user);
                   // this.navCtrl.setRoot(TabsPage,{user:  user.user.uid});
                },
                error => {
                    
                    this.signupError = error.message;
                    this.codeError= error.code;
                    console.log(this.codeError);
                    this.presentToast(this.signupError);
                    
                }
            );
        }
      }
    
    validate():boolean {
        this.isEmailValid = true;
        this.isPasswordValid = true;
    
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);
        console.log(this.isEmailValid);
        return this.isPasswordValid && this.isEmailValid;
     }

     presentToast(message: string) {
        let toastItem = AppSettings.TOAST;
        toastItem["message"] = message;
        let toast = this.toastCtrl.create(toastItem);
        toast.present();
      }
}
