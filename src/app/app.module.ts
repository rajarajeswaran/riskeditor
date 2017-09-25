
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import icons from 'glyphicons'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { RiskModule } from './risk/risk.module'
import { layoutStoreProviders } from './app-state/laytout/layout.store';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    SideNavComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    NgbModule.forRoot(),
    RiskModule,
  ],
  providers: [layoutStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
