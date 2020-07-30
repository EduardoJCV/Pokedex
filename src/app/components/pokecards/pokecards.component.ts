import { Component, Input } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.css']
})
export class PokecardsComponent {

  carga = false;
  loading = false;

  constructor( private router: Router ){}

  @Input('pokemonsList') pokemonsList;

  goPockemon(id){
    this.router.navigate(['pokemon', id]);

  }

}
