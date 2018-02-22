import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { EquipoService } from 'app/registroEquipos/equipo.service';
import { AppComponent } from './app.component';
import { EquipoListComponent } from './registroEquipos/equipo-list.component';
import { RegistroJugadoresComponent} from './registroJugadores/registroJugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroJugadoresComponent,
    EquipoListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    EquipoService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
