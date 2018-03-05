import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirebaseCmsModule, FirebaseCmsService, UnitTestService } from './modules/firebase-cms/firebase-cms.module';
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
  constructor(cms: FirebaseCmsService, t: UnitTestService ) {
    cms.initialize({
      firebase: environment.firebase,
      api: 'https://us-central1-thruthesky-firebase-backend.cloudfunctions.net/api'
    });
    t.runTests();
  }
}
