import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSiteComponent } from './components/header-site/header-site.component';
import { PhotoMainComponent } from './components/photo-main/photo-main.component';
import { FooterSiteComponent } from './components/footer-site/footer-site.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { LoginTindinComponent } from './components/login-tindin/login-tindin.component';
import { DetailsGameComponent } from './components/details-game/details-game.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    PhotoMainComponent,
    FooterSiteComponent,
    SectionMainComponent,
    ListGamesComponent,
    LoginTindinComponent,
    DetailsGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
