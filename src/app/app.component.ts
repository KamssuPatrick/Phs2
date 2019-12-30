import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuProvider} from '../providers/menu/menu';

import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { AdminPage } from '../pages/admin/admin';

import { GestionUtilisateurPage } from '../pages/gestion-utilisateur/gestion-utilisateur';
import { PageAccueilPage } from '../pages/page-accueil/page-accueil';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;
  
  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Gestion des gérants', component: "UtilisateurPage" },
      { title: 'Gestion des Immeubles', component: "ImmeublePage" },
      { title: 'Gestion des logis', component: "AppartementNmPage" },
      { title: 'Messagerie', component: "MessageriePage" },
      { title: 'Mon Profil', component: "MonprofilePage" },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  Accueil()
  {
    this.nav.setRoot(AdminPage);
  }

  GestionUtilisateur()
  {
    this.nav.push(GestionUtilisateurPage);
  }
}

