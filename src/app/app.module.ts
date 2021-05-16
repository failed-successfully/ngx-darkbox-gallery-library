import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDarkboxGalleryModule } from '@failed-successfully/ngx-darkbox-gallery';
import { FormsModule } from '@angular/forms';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeSwitchComponent
  ],
  imports: [
    BrowserModule,
    NgxDarkboxGalleryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
