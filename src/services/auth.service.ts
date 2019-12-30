import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
	private user: firebase.User;
	username: any;
	
	
	constructor(public afAuth: AngularFireAuth , public afDB: AngularFireDatabase) {

		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
	}

	userDetails(){
		return firebase.auth().currentUser;
	  }

	
	getUsername()
  {
    // function goes to firebase and checks the profile node for the current users username 
    var userId = this.afAuth.auth.currentUser.uid;

    return firebase.database().ref(`/profiles/${userId}/username/`).once('value').then(function(snapshot){
    var username = (snapshot.val() && snapshot.val().username) || 'Anoynymous';
   })
    
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
      console.log('A informacao de data ' + data.uid);
      return data.uid;
    });
  }

  

	
	writeUserData(userId, username, email, prenom, profession, societe, telephone, profilPic) {
		firebase.database().ref('users/' + userId).set({
		  username: username,
		  email: email,
		  prenom : prenom,
		  profession: profession,
		  societe: societe,
		  telephone: telephone,
		  profilPic:profilPic
		});
	  }

	  writeUserData2(userId, profession, societe, telephone) {
		firebase.database().ref('users/' + userId).set({
		  profession: profession,
		  societe: societe,
		  telephone: telephone
		});
	  }

	get authenticated(): boolean {
		return this.user !== null;
	}
	
	

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

	signInWithGoogle():Promise<any | void> {
		console.log();
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = (<any>result).credential.accessToken;
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
	}

	

}
