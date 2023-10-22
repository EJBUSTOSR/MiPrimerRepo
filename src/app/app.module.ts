import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/inicio/nav-bar/nav-bar.component';
import { BannerComponent } from './components/inicio/banner/banner.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { AboutComponent } from './components/inicio/about/about.component';
import { WorksDoneComponent } from './components/inicio/works-done/works-done.component';
import { WorksComponent } from './components/inicio/works/works.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    WorksDoneComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
