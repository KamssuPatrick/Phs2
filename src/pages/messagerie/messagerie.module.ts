// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { MessageriePage } from './messagerie';
import { IonicPageModule } from 'ionic-angular';

  @NgModule({
    declarations: [
      MessageriePage,
    ],
    imports: [
      IonicPageModule.forChild(MessageriePage),
      SwipeToDismissLayout1Module
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  export class MessageriePageModule {}