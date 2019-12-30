// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppartementNmPage } from './appartement-nm';

@NgModule({
    declarations: [
        AppartementNmPage
    ],
    imports: [
      IonicPageModule.forChild(AppartementNmPage),
      SwipeToDismissLayout1Module 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  
  export class AppartementNmPageModule {}