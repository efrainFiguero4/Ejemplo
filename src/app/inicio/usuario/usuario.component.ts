import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
	selector: 'usuario-app',
	templateUrl: '/usuario.component.html',
	styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
	/**
	 * @param _user ** INYECTAMOS EL SERVICE DEL COMPONENTE
	 */
	constructor(private _user: UsuarioService) { }

	ls_user: Usuario[];

	/**
	 * OBTIENE LA LISTA DE USUARIO DESDE EL SERVICE
	 */
	get_ls_user() {
		this._user.get_users().subscribe(resp => {
			this.ls_user = resp;
			/**
			 * GUARDAR LA LISTA EN EL LOCALSTORAGE
			 */
			localStorage.setItem('usuarios', JSON.stringify(this.ls_user));
		})
	}

	/**
	 * DIRECTIVA QUE INICIA CUANDO SE INICIA LA PANTALLA
	 */
	ngOnInit() {
		/**
		 * INICIA LA FUNCION LISTAR USUARIOS
		 */
		this.get_ls_user();
	}
}
