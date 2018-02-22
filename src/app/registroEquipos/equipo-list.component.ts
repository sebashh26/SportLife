  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { EquipoService } from './equipo.service';
  import { Equipo } from './equipo';

  @Component({
    selector: 'equipo-list',
    templateUrl: './equipo-list.component.html'
    })

  export class EquipoListComponent implements OnInit {
    equipos: Equipo[];
    newEquipo: Equipo = new Equipo();
    editing: boolean = false;
    editingEquipo: Equipo = new Equipo();

    constructor(
      private equipoService: EquipoService,
      ) {}

    ngOnInit(): void {
      this.getEquipos();
    }

    getEquipos(): void {
      this.equipoService.getEquipos()
      .then(equipos => this.equipos = equipos );
    }

    createEquipo(equipoForm: NgForm): void {
      this.equipoService.createEquipo(this.newEquipo)
      .then(createEquipo => {        
        equipoForm.reset();
        this.newEquipo = new Equipo();
        this.equipos.unshift(createEquipo)
        });
    }

    deleteEquipo(id: string): void {
     this.equipoService.deleteEquipo(id)
     .then(() => {
      this.equipos = this.equipos.filter(equipo => equipo.id != id);
      });
   }

   updateEquipo(equipoData: Equipo): void {
    console.log(equipoData);
    this.equipoService.updateEquipo(equipoData)
    .then(updatedEquipo => {
      let existingEquipo = this.equipos.find(equipo => equipo.id === updatedEquipo.id);
      Object.assign(existingEquipo, updatedEquipo);
      this.clearEditing();
      });
  }

  toggleCompleted(equipoData: Equipo): void {
   equipoData.completed = !equipoData.completed;
   this.equipoService.updateEquipo(equipoData)
   .then(updatedEquipo => {
    let existingEquipo = this.equipos.find(equipo => equipo.id === updatedEquipo.id);
    Object.assign(existingEquipo, updatedEquipo);
    });
 }

 editEquipo(equipoData: Equipo): void {
   this.editing = true;
   Object.assign(this.editingEquipo, equipoData);
 }

 clearEditing(): void {
  this.editingEquipo = new Equipo();
  this.editing = false;
 }
 
}
