import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Clipboard } from '@ionic-native/clipboard';


import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';
import { WizardLayout3 } from '../components/wizard/layout-3/wizard-layout-3';
import { GoogleCardLayout1 } from '../components/list-view/google-card/layout-1/google-card-layout-1';
import { ImageGalleryLayout1Module } from '../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { SubImageGalleryModule } from '../components/sub-image-gallery/sub-image-gallery.module';
import { FullScreenGalleryModule } from '../components/full-screen-gallery/full-screen-gallery.module';
import { GoogleCardLayout2Module } from '../components/list-view/google-card/layout-2/google-card-layout-2.module';
import {ParallaxLayout3Module} from '../components/parallax/layout-3/parallax-layout-3.module';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { SearchBarLayout1Module } from '../components/search-bar/layout-1/search-bar-layout-1.module';
import { AppearanceAnimationLayout5Module } from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';

import { SwipeToDismissLayout3Module } from '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module'





import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Config } from '../config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatbodyPage } from '../pages/chatbody/chatbody';



import { AccueilPage } from '../pages/accueil/accueil';
import { ProduitPage } from '../pages/produit/produit';
import { ProduitDetailsPage } from '../pages/produit-details/produit-details';
import { AdminPage } from '../pages/admin/admin';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppSettings } from '../services/app-settings';
import { AuthService } from '../services/auth.service';
import { GestionUtilisateurPage } from '../pages/gestion-utilisateur/gestion-utilisateur';
import { MenuProvider } from '../providers/menu/menu';
import { HttpClientModule } from '@angular/common/http';
import { SwipeToDismissLayout1Module } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { AjoutProduitPage } from '../pages/ajout-produit/ajout-produit';

import * as firebase from 'firebase/app';
import { ModifcationProduitPage } from '../pages/modifcation-produit/modifcation-produit';
import { NoteListService } from '../services/note-list.service';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera';
import { DataProvider } from '../providers/data-service/data';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';
import { ChatProvider } from '../providers/chat/chat';
import { AuthProvider } from '../providers/auth/auth';
import { ModificationProfilPage } from '../pages/modification-profil/modification-profil';
import { HTTP } from '@ionic-native/http/ngx';
import { StickyListHeaderLayout2Module } from '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module';
import { IonAffixModule } from 'ion-affix';
import { AppearanceAnimationLayout3Module } from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module';
import { ListeFavorisPage } from '../pages/liste-favoris/liste-favoris';


import { PageAccueilPage } from '../pages/page-accueil/page-accueil';
import { IonicSelectableModule } from 'ionic-selectable';
import { PortService } from '../services';
import { AjoutImmmeublePage } from '../pages/ajout-immmeuble/ajout-immmeuble';
import { ModifierImmeublePage } from '../pages/modifier-immeuble/modifier-immeuble';
import { AjoutGerantPage } from '../pages/ajout-gerant/ajout-gerant';
import { AjoutLogisPage } from '../pages/ajout-logis/ajout-logis';
import { ListeImmeublePage } from '../pages/liste-immeuble/liste-immeuble';
import { AppartementNmPage } from '../pages/appartement-nm/appartement-nm';
import { DetailLogementPage } from '../pages/detail-logement/detail-logement';
import { PaiementMensuelPage } from '../pages/paiement-mensuel/paiement-mensuel';
import { HistoriquePaiementPage } from '../pages/historique-paiement/historique-paiement';

var firebaseConfig = {
    apiKey: "AIzaSyDsEctUgC5_DpvX4OfK25MYsE9HPecJGOg",
    authDomain: "phs2019.firebaseapp.com",
    databaseURL: "https://phs2019.firebaseio.com",
    projectId: "phs2019",
    storageBucket: "phs2019.appspot.com",
    messagingSenderId: "35024273820",
    appId: "1:35024273820:web:994ae0ddeb1d3afdb44859"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterLayout2,
    WizardLayout3,
    AccueilPage,
    GoogleCardLayout1,
    ProduitPage,
    ProduitDetailsPage,
    GestionUtilisateurPage, 
    AjoutProduitPage,
    ModifcationProduitPage,
    ChatbodyPage,
    ModificationProfilPage,
    ListeFavorisPage,
    PageAccueilPage,
    AjoutImmmeublePage,
    ModifierImmeublePage,
    AjoutGerantPage,
    AjoutLogisPage,
    AdminPage,
    ListeImmeublePage,
    AppartementNmPage,
    DetailLogementPage,
    PaiementMensuelPage,
    HistoriquePaiementPage
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule, AngularFireStorageModule,IonAffixModule,
    HttpModule,
    ImageGalleryLayout1Module, SubImageGalleryModule, FullScreenGalleryModule, GoogleCardLayout2Module,
    ParallaxLayout3Module,SpinnerModule,SearchBarLayout1Module, AppearanceAnimationLayout5Module, HttpClientModule, SwipeToDismissLayout1Module,SwipeToDismissLayout3Module, 
    StickyListHeaderLayout2Module,AppearanceAnimationLayout3Module, StickyListHeaderLayout2Module,IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterLayout2,
    WizardLayout3,
    AccueilPage,
    GoogleCardLayout1,
    ProduitPage,
    ProduitDetailsPage,
    AdminPage,
    GestionUtilisateurPage,
    AjoutProduitPage,
    ModifcationProduitPage,
    ChatbodyPage,
    ModificationProfilPage,
    ListeFavorisPage,
    PageAccueilPage,
    AjoutImmmeublePage,
    ModifierImmeublePage,
    AjoutGerantPage,
    AjoutLogisPage,
    AdminPage,
    ListeImmeublePage,
    AppartementNmPage,
    DetailLogementPage,
    PaiementMensuelPage,
    HistoriquePaiementPage
    
  ],
  providers: [
    Config,
    StatusBar,
    FileTransferObject,
    FileTransfer, // <--- This one!        
    File,
    Camera,
    ImagePicker,
    DataProvider,
    Clipboard,
    AngularFireAuth,
    GoogleAnalytics,
    AuthService,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider,
    NoteListService,
    GlobalProvider,
    ChatProvider,
    AuthProvider,
    SplashScreen,
    HTTP,
    PortService
  ]
})
export class AppModule {}
