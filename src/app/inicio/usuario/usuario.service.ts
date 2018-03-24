import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
	
	/**
	 * @param _http ** CLASE INYECTABLE PROPIO DE ANGULAR QUE SIRVE PARA INVOCAR SERVICIOS REST
	 */
	constructor(private _http: HttpClient) { }

	/**
	 * URL LISTA DE USUARIOS
	 */
	url = "https://jsonplaceholder.typicode.com/users";

	/**
	 * CONECTA HACIA LA URL DONDE EL JSON DE USUARIOS
	 */
	get_users() {
		return this._http.get<Usuario[]>(this.url);
	}
}
