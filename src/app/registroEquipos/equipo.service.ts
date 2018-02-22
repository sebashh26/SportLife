import { Injectable } from '@angular/core';
import { Equipo } from 'app/registroEquipos/equipo';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipoService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http: Http) { }

  getEquipos():  Promise<Equipo[]> {
    return this.http.get(this.baseUrl + '/api/equipos/')
      .toPromise()
      .then(response => response.json() as Equipo[])
      .catch(this.handleError);
  }

  createEquipo(equipoData: Equipo): Promise<Equipo> {
    return this.http.post(this.baseUrl + '/api/equipos/', equipoData)
      .toPromise().then(response => response.json() as Equipo)
      .catch(this.handleError);
  }

  updateEquipo(equipoData: Equipo): Promise<Equipo> {
    return this.http.put(this.baseUrl + '/api/equipos/' + equipoData.id, equipoData)
      .toPromise()
      .then(response => response.json() as Equipo)
      .catch(this.handleError);
  }

  deleteEquipo(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/equipos/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
