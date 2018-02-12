import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { StashComponent } from './stash/stash.component';
import { StashListComponent } from './stash-list/stash-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    StashComponent,
    StashListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
