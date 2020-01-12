import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SpeciesComponent }  from './species.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { FilterTextboxComponent } from './species-list/filter-textbox.component';
import { SpeciesRoutingModule } from './species-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, SpeciesRoutingModule ],
  declarations: [ SpeciesComponent, SpeciesListComponent, FilterTextboxComponent ],
  exports: [ SpeciesComponent ]
})
export class SpeciesModule { }