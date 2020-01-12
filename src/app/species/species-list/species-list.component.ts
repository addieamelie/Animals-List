import { Component, OnInit, Input} from '@angular/core';

import { ISpecies } from '../../shared/interfaces';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html'
})

export class SpeciesListComponent implements OnInit {

    private _species: ISpecies[] = [];
    @Input() get species(): ISpecies[] {
      return this._species;
    }

    set species(value: ISpecies[]) {
        if (value) {
            this.filteredSpecies = this._species = value;
        }
    }
    filteredSpecies: any[] = [];
  
    constructor() { }
  
    ngOnInit() {
    }
  
    filter(data: string) {
      if (data) {
          this.filteredSpecies = this.species.filter((spec: ISpecies) => {
              return spec.name.toLowerCase().indexOf(data.toLowerCase()) > -1
          });
      } else {
          this.filteredSpecies = this.species;
      }
  
  }
}
