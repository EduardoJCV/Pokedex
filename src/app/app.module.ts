import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PokecardsComponent } from './components/pokecards/pokecards.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { PokemonInfoComponent } from './pages/pokemon/pokemon-info/pokemon-info.component';
import { PokemonStatsComponent } from './pages/pokemon/pokemon-stats/pokemon-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pages/pokemon/pokemon/pokemon.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokecardsComponent,
    TipoComponent,
    PokemonInfoComponent,
    PokemonStatsComponent,
    PokemonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
