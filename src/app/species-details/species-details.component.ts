import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ISpecies } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html'
})

export class SpeciesDetailsComponent implements OnInit {

    animal: ISpecies;
  
    constructor(private dataService: DataService, 
                private route: ActivatedRoute) { }
  
    ngOnInit() {

      let id = +this.route.snapshot.paramMap.get('id'); //snapshot of id in URL

      this.dataService.getSpecies(id).subscribe((animal: ISpecies) => {
      this.animal = animal;
    });
  }

   
  

}
