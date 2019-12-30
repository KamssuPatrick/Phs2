import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
         import {ParallaxLayout2Module} from '../../components/parallax/layout-2/parallax-layout-2.module';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';

         @NgModule({
          declarations: [
            AdminPage,
          ],
          imports: [
              IonicPageModule.forChild(AdminPage),
              ParallaxLayout2Module
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
        export class AdminPageModule {}