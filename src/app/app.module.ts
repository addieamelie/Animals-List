import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesModule } from './species/species.module';
import { SpeciesDetailsModule } from './species-details/species-details.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    SpeciesModule, 
    SpeciesDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
