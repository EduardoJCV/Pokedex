import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tipos = [];

  constructor( private pokedex: PokedexService, private router:Router ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(){
    this.pokedex.getTypes().subscribe( (res:any) =>{
      this.tipos = res.results;
    });
  }

  goType(id){
    this.router.navigate(['tipo', id]);

    setTimeout(() => {
      location.reload();
    }, 500);
  }

  buscar(id){
    this.router.navigate(['pokemon', id]);

    setTimeout(() => {
      location.reload();
    }, 500);
  }
  

}
