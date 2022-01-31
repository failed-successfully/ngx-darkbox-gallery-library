import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDarkboxGalleryModule } from '@failed-successfully/ngx-darkbox-gallery';
import { AppComponent } from './app.component';
import { ConfigurationEditorComponent } from './components/configuration-editor/configuration-editor.component';
import { DarkModeSwitchComponent } from './components/dark-mode-switch/dark-mode-switch.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeSwitchComponent,
    FooterComponent,
    ConfigurationEditorComponent
  ],
  imports: [
    BrowserModule,
    NgxDarkboxGalleryModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
