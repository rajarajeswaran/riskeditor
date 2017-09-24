
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import icons from 'glyphicons'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { counterStoreProviders } from './app-state/counter/counter.store';
import { riskStoreProviders } from './app-state/risk/risk.store';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RiskComponent } from './risk/risk.component'


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    SideNavComponent,
    RiskComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [counterStoreProviders,
    riskStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
