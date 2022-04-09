import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuotesComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
