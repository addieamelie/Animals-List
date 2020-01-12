import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Species } from '../../assets/species.model';
import { ISpecies } from '../shared/interfaces';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit {

  animals: Species[]; //Species from the API

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSpeciesList()
      .subscribe((species: ISpecies[]) => this.animals = species);

  }

}
