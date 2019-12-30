import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
         import {ParallaxLayout2Module} from '../../components/parallax/layout-2/parallax-layout-2.module';
import { GestionUtilisateurPage } from './gestion-utilisateur';
import { IonicPageModule } from 'ionic-angular';

         @NgModule({
          declarations: [
            GestionUtilisateurPage,
          ],
          imports: [
              IonicPageModule.forChild(GestionUtilisateurPage),
              ParallaxLayout2Module
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
        export class GestionUtilisateurPageModule {}