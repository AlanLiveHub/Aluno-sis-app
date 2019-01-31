import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlunoProvider } from '../providers/aluno/aluno';
import { IonicStorageModule } from '@ionic/storage';
  import { DatePipe } from '@angular/common';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot({
        name: '__mydbAluno',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      DatePipe,
      AlunoProvider
  ]
})
export class AppModule {}
