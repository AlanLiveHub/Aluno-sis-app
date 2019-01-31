import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonicModule
  ],
  exports: [
    ContactPage
   
  ]
})
export class ContactPageModule {}