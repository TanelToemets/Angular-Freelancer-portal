import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service'; // added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // animations
import { FormsModule } from '@angular/forms'; // to use two way binding in form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { BecomeflComponent } from './becomefl/becomefl.component';
import { HireflComponent } from './hirefl/hirefl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    BecomeflComponent,
    HireflComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // also must add hear to use two way binding on forms
    BrowserAnimationsModule // animations
  ],
  providers: [DataService], // added
  bootstrap: [AppComponent]
})
export class AppModule { }
