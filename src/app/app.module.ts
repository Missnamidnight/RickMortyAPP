import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component'
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PrincipalComponent } from './principal/principal.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';

const routes: Routes = [
  {path:'',component: PersonajesComponent},
  {path:'seccioncapitulos',component:CapitulosComponent},
  {path:'trailers',component:TrailersComponent},
  {path:'localizaciones',component:LocalizacionesComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CapitulosComponent,
    PersonajesComponent,
    PrincipalComponent,
    TrailersComponent,
    LocalizacionesComponent   
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    FilterPipeModule,
    ReactiveFormsModule
    
  ],
  providers: [
    
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}