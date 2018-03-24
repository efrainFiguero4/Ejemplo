import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/slide-in-out.animation';
import { ActivatedRoute } from '@angular/router';
import { DetalleService } from './detalle.service';
import { Usuario } from '../usuario/usuario';


declare var $: any;

@Component({
	moduleId: module.id.toString(),
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.css'],
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }
})

export class DetalleComponent implements OnInit {

	constructor(private route: ActivatedRoute, private _detalle: DetalleService) { }

	usuario = new Usuario();

	ngOnInit() {
		/**
		 * SE OBTIENE EL ID DEL USUARIO SELECCIONADO
		 */
		let productId = Number(this.route.snapshot.params['id']);
		if (productId) {
			/**
			 * OBTIENE USUAIO ESPECIFICO SEGUN EL USUARIO SELECCIONADO Y SE LE ASIGNA AL OBJETO USUARIO
			 */
			this.usuario = this._detalle.getById(productId);
			console.log(this.usuario)
		}
	}
}
