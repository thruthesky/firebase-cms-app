import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirebaseCmsModule, FirebaseCmsService } from './modules/firebase-cms/firebase-cms.module';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseCmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(cms: FirebaseCmsService) {
    cms.initializeFirebase(environment.firebase);
  }
}
