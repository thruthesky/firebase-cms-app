import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FirebaseCmsModule } from './modules/firebase-cms/sdk';
import { UnitTestsModule, UnitTestService } from './modules/firebase-cms/unit-tests';
import { FirebaseCmsComponentModule } from './modules/firebase-cms/components';


import { environment } from '../environments/environment';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , FirebaseCmsModule.forRoot({
      firebase: environment.firebase,
      api: 'https://us-central1-thruthesky-firebase-backend.cloudfunctions.net/api'
    })
    , UnitTestsModule
    , FirebaseCmsComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    t: UnitTestService
  ) {
    t.runTests();
  }
}
