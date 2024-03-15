import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MyProgressBarComponent } from '../progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    //MatProgressBarModule, // Ajoutez ici tous les composants que vous utilisez dans votre application
    MyProgressBarComponent
  ],
  imports: [
    BrowserModule,
    //MatProgressBarModule,
    // Ajoutez ici tous les modules que vous importez dans votre application
  ],
  providers: [],
  bootstrap: [AppComponent] // Définit le composant racine de votre application
})
export class AppModule { }
