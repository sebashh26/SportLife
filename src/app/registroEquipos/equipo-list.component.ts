import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'equipo-list',
  templateUrl: './equipo-list.component.html'
})

export class EquipoListComponent implements OnInit {
  equipos: Equipo[];
  newEquipo: Equipo = new Equipo();
  editing: boolean = false;
  editingEquipo: Equipo = new Equipo();

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(): void {

  }

  createEquipo(equipoForm: NgForm): void {

  }

  deleteEquipo(id: string): void {

  }

  updateEquipo(equipoData: Equipo): void {

  }

  toggleCompleted(equipoData: Equipo): void {

  }

  editEquipo(equipoData: Equipo): void {

  }

  clearEditing(): void {

  }
}
