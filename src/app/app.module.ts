import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CharactersComponent} from "./characters/characters.component";
import {CharacterService} from "./service/impl/chatacter.service";
import {HighlightDirective} from "./directives/highlite.directive";
import {RouterModule, Routes} from "@angular/router";
import {CharacterDetailsComponent} from "./character-details/character-details.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {VehicleService} from "app/service/impl/vehicle.service";
import {HelperService} from "app/service/helper.service";
import {StarshipsComponent} from "./starships/starships.component";
import {StarshipService} from "app/service/impl/starship.service";
import {MoviesComponent} from "./movies/movies.component";
import {MovieService} from "app/service/impl/movie.service";
import {LoggedInGuard} from "./logged-in.guard";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "app/service/auth.service";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {VehicleDetailsComponent} from "./vehicle-details/vehicle-details.component";
import {StarshipDetailsComponent} from "./starship-details/starship-details.component";
import {GenderPipe} from "./pipes/gender.pipe";
import {FilterPipe} from "./pipes/filter.pipe";
import {RegisterComponent} from "./register/register.component";
import {RegisterBuilderComponent} from './register-builder/register-builder.component';
import {EqualValidatorDirective} from 'app/directives/equal-validator.directive';
import {ExamplesModule} from "app/examples/examples.module";

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'vehicles', component: VehiclesComponent, canActivate: [LoggedInGuard]},
  {path: 'vehicles/:id', component: VehicleDetailsComponent, canActivate: [LoggedInGuard]},
  {path: 'starships', component: StarshipsComponent, canActivate: [LoggedInGuard]},
  {path: 'starships/:id', component: StarshipDetailsComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'register-builder', component: RegisterBuilderComponent},
  {path: 'examples', loadChildren: 'app/examples/examples.module#ExamplesModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HighlightDirective,
    CharacterDetailsComponent,
    VehiclesComponent,
    StarshipsComponent,
    MoviesComponent,
    LoginComponent,
    MovieDetailsComponent,
    VehicleDetailsComponent,
    StarshipDetailsComponent,
    GenderPipe,
    FilterPipe,
    RegisterComponent,
    RegisterBuilderComponent,
    EqualValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ExamplesModule
  ],
  providers: [
    CharacterService,
    VehicleService,
    HelperService,
    StarshipService,
    MovieService,
    LoggedInGuard,
    AuthService,
    {provide: 'API_URL', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
