import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDarkboxGalleryModule } from '@failed-successfully/ngx-darkbox-gallery';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ConfigurationEditorComponent } from './components/configuration-editor/configuration-editor.component';
import { DarkModeSwitchComponent } from './components/dark-mode-switch/dark-mode-switch.component';
import { FooterComponent } from './components/footer/footer.component';

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
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    ToastrModule.forRoot(),
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
