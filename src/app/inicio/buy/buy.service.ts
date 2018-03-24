import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BuyService {
	constructor(private _http: Http) { }

	url_servicios = "http://localhost:9999/";

	get_puntos_llegada(codigo: string) {
		return this._http.get(this.url_servicios + "puntos/estado/" + codigo).map(resp => resp.json())
	}

	get_personal() {
		return this._http.get(this.url_servicios + "rutas").map(resp => resp.json())
	}

	get_rutas() {
		return this._http.get(this.url_servicios + "rutas").map(resp => resp.json())
	}

	guardar_ruta(punto_enviar: any) {
		return this._http.post(this.url_servicios + "puntos?" + Object.keys(punto_enviar).map(key => key + '=' + punto_enviar[key]).join('&'), "")
			.map(resp => resp.json(), error => error)
	}
}
