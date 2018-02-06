import {Component} from '@angular/core'

@Component({
	selector:'registroJugadores',
	templateUrl:'./registroJugadores.component.html'
})
export class RegistroJugadoresComponent{
	public nombre:string;
	public mejor_aplicacion: string ;
	public nombre_equipo:string;
	public nombre_equipo_malo:string;
	public mostrar_equipo:boolean; 
	public color:string;
	public equipos:Array<string>;

	constructor(){
		this.nombre='Registro de Jugadores';
		this.mejor_aplicacion='SportLife'
		this.nombre_equipo='Alamos';
		this.nombre_equipo_malo='Real Madrid';
		this.mostrar_equipo=false;
		this.color='red';
		this.equipos=['Alamos','Bonice', 'Estrella', 'Loja','Escorpion'];

	}

}