import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class DetalleService {
	constructor(private _user: UsuarioService) { }

	getById(id: number) {
		return this.get_usuarios().find(product => product.id === id);
	}

	get_usuarios() {
		if (!localStorage.getItem('usuarios')) {
			localStorage.setItem('usuarios', JSON.stringify([]));
		}

		return JSON.parse(localStorage.getItem('usuarios'));
	}

}

