import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppearanceAnimationLayout1Module } from '../../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module';
import { UtilisateurPage } from './utilisateur';
import { IonicPageModule } from 'ionic-angular';

 @NgModule({
 declarations: [
    UtilisateurPage,
 ],
 imports: [
   IonicPageModule.forChild(UtilisateurPage),
   AppearanceAnimationLayout1Module
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })

 export class UtilisateurPageModule {}