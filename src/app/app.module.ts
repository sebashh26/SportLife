import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistroJugadoresComponent} from './registroJugadores/registroJugadores.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EquipoListComponent } from './registroEquipos/equipo-list.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistroJugadoresComponent,
    EquipoListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule
  ],
  providers: [BrowserModule,
    HttpModule,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
