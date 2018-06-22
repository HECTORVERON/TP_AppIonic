import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../models/paises';
import { Model, ModelFactory } from 'ngx-model';//libreria para manejo de observables

@Injectable()
export class PaisesService {
    private model: Model<Paises[]>;
    paises$: Observable<Paises[]>;
    constructor(private http: HttpClient, public modelFactory: ModelFactory<Paises[]>) {
        //inicializacion de variables
        this.model = this.modelFactory.create([]);
        this.paises$ = this.model.data$;
    }
    get() {//funcion de petición
        //se tiene una gran lista de metodos
        //todos los metodos aqui utilizan funciones flecha
        this.http.get('https://restcountries.eu/rest/v2/all')//get desde el servicio REST
            .timeout(4000)//tiempo de espera de petición
            .map((data: any) => {//filtrar los datos por lo declarado dentro de la =>  (nombre del pais, capital y region)
                return data.map(item => { //return de los mapeos (es un objeto)
                    let pais = new Paises();
                    pais.name = item.name;
                    pais.region = item.region;
                    pais.capital = item.capital;
                    pais.flag = item.flag;
                    return pais; //objeto mapeado (filtrado)
                })
            })
            .catch((error) => {
                console.log(error);
                return [];
            })
            .subscribe((data) => {
                this.model.set(data);//establece los nuevos valores a "model"
            })
    }
}