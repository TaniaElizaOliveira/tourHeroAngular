import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { InputComponent } from './components/atoms/input/input.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { MessagesComponent } from './components/molecules/messages/messages.component';
import { NavComponent } from './components/molecules/nav/nav.component';
import { TopHeroComponent } from './components/molecules/top-hero/top-hero.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HeroDetailComponent } from './components/organisms/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/organisms/hero-search/hero-search.component';
import { HeroesComponent } from './components/pages/heroes/heroes.component';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TextComponent } from './components/atoms/text/text.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeaderComponent,
    NavComponent,
    TopHeroComponent,
    TitleComponent,
    ButtonsComponent,
    InputComponent,
    TextComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

