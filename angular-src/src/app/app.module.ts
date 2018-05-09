import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlgorithmPreviewComponent } from './components/algorithm-preview/algorithm-preview.component';
import { AlgorithmPageComponent } from './components/algorithm-page/algorithm-page.component';
import { AlgorithmService } from './services/algorithm.service'

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AlgorithmPreviewComponent,
    AlgorithmPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      )
  ],
  providers: [
    AlgorithmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
