import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgxDarkboxGalleryModule,
        FormsModule,
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
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
