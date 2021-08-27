import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDarkboxGalleryModule } from '@failed-successfully/ngx-darkbox-gallery';
import { AppComponent } from './app.component';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    DarkModeSwitchComponent
  ],
  imports: [
    BrowserModule,
    NgxDarkboxGalleryModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
